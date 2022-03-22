import { Client as BaseClient, Options, Collection, ApplicationCommand, Guild, ApplicationCommandPermissionData, ApplicationCommandType, GuildResolvable, Partials } from 'discord.js';
import { GatewayIntentBits } from 'discord-api-types/v10';
import { promises as fs } from 'fs';
import { join } from 'path';
import { ClientOptions } from '../types';
import { inspect } from 'util';

import BaseCommand from './base/BaseCommand';
import BaseEvent from './base/BaseEvent';
import Utils from '../utils';
import Handler from './Handler';
import Resolve from './Resolve';
import Messages from './Messages';

const defaultOptions: ClientOptions = {
	partials: [Partials.User, Partials.GuildMember, Partials.Message, Partials.Channel, Partials.Reaction, Partials.GuildScheduledEvent],
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
	],
	makeCache: Options.cacheWithLimits({
		MessageManager: {
			maxSize: 100,
		}
	}),
	sweepers: {
		messages: {
			interval: 60,
			lifetime: 100
		}
	},
	failIfNotExists: false
};

class Client extends BaseClient {
	data: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
		owners: Array<string>;
	};
	debug: boolean;
	utils = Utils;
	log = Utils.logger;

	events = new Collection<string, BaseEvent>();
	commands = new Collection<string, BaseCommand>();
	// eslint-disable-next-line @typescript-eslint/ban-types
	applicationCommands = new Collection<string, Collection<string, ApplicationCommand<{ guild?: GuildResolvable }>>>();
	textCommandHandler = new Handler(this);
	applicationCommandHandler = new Handler(this);
	resolve = new Resolve(this);
	messages = new Messages();

	constructor(options: ClientOptions) {
		super(
			Object.assign({}, defaultOptions, options)
		);

		this.debug = options.debug ? true : false;
		this.data = Object.assign({}, options?.data, { owners: Array.from(options?.data?.owners || options?.owners || []) });

		if (!options.disableDefaultReady) this.on('ready', () => {
			this.log.success(`${this.user.tag} ready!`);
		});
	}

	/** Registers a command from file path. */
	async registerCommand(dir: string, category: string): Promise<boolean | string> {
		try {
			const Command = await import(dir);
			if (Command.prototype instanceof BaseCommand) {
				const props: BaseCommand = new Command();
				props.config.category = category;
				this.commands.set(props.config.name, props);
				if (this.debug) this.log.debug(`Loaded Command - ${props.config.name}`);
			} else if (Command?.default?.prototype instanceof BaseCommand) {
				const props: BaseCommand = new Command.default();
				props.config.category = category;
				this.commands.set(props.config.name, props);
				if (this.debug) this.log.debug(`Loaded Command - ${props.config.name}`);
			}
			return false;
		} catch (e) {
			return `Unable to load command ${dir}:\n${inspect(e)}`;
		}
	}

	/** Registers commands from directory path */
	async registerCommands(dir: string): Promise<Collection<string, BaseCommand>> {
		const files = await fs.readdir(dir);
		for (const file of files) {
			const filesPath = join(dir, file);
			const commands = await fs.readdir(filesPath);
			await Promise.all(commands.filter((command) => command.endsWith('.js')).map(async (command) => {
				const response = await this.registerCommand(join(filesPath, command), file);
				if (response) this.log.error(response);
			}));
		}

		return this.commands;
	}

	/** Registers application commands from Client#commands globally or for a guild if it is specified. */
	async registerApplicationCommands(guild?: Guild): Promise<Collection<string, ApplicationCommand<{ guild?: GuildResolvable }>>> {
		const target = guild ?? this.application;

		return Promise.all(this.commands.filter(cmd => cmd.config.availibility != 1).map((command) => {
			return {
				name: command.config.name,
				description: [ApplicationCommandType.Message, ApplicationCommandType.User].includes(command.config.applicationType) ? null : command.config.description,
				options: command.config.commandOptions,
				defaultPermission: command.permissions.default != false,
				type: [ApplicationCommandType.ChatInput, ApplicationCommandType.User, ApplicationCommandType.Message].includes(command.config.applicationType) ? command.config.applicationType : ApplicationCommandType.ChatInput,
			};
		})).then(async (data) => {
			return target?.commands.set(data).then(async (result) => {
				if (target != this.application) await Promise.all(result.map(async (command) => {
					const cmd = this.commands.get(command.name);
					if (typeof cmd?.permissions?.build === 'function') await command.permissions.add({ guild: guild, permissions: (cmd.permissions.build as (command: ApplicationCommand, guild: Guild) => Array<ApplicationCommandPermissionData>)(command, guild) });
				}));
				this.applicationCommands.set(guild ? guild.id : '0', result);
				return result;
			});
		});
	}

	/** Unregisters application commands globally or for a guild if it is specified. */
	async unregisterApplicationCommands(guild?: Guild): Promise<Collection<string, ApplicationCommand<{ guild?: GuildResolvable }>>> {
		const target = guild ?? this.application;

		this.applicationCommands.delete(guild ? guild.id : '0');
		return target.commands.set([]);
	}

	/** Regsiters events from directory path */
	async registerEvents(dir: string, target?: any): Promise<void> { /* eslint-disable-line @typescript-eslint/explicit-module-boundary-types */  /* eslint-disable-line @typescript-eslint/no-explicit-any */
		const defaultTarget = target == undefined;
		if (defaultTarget) target = this;
		const files = await fs.readdir(dir);

		Promise.all(files.filter((file) => file.endsWith('.js')).map(async (file) => {
			const Event = await import(join(dir, file));
			if (Event.prototype instanceof BaseEvent) {
				const instance: BaseEvent = new Event();
				instance.run = instance.run.bind(instance, this);
				target.on?.(instance.name, instance.run);
				target.events?.set?.(instance.name, instance);
				if (this.debug) this.log.debug(`Loaded ${defaultTarget ? 'Client' : target.constructor.name ?? ''} Event - ${instance.name}`);
			} else if (Event?.default?.prototype instanceof BaseEvent) {
				const instance: BaseEvent = new Event.default();
				instance.run = instance.run.bind(instance, this);
				target.on?.(instance.name, instance.run);
				target.events?.set?.(instance.name, instance);
				if (this.debug) this.log.debug(`Loaded ${defaultTarget ? 'Client' : target.constructor.name ?? ''} Event - ${instance.name}`);
			}
		}));
	}

	/** Initiates the Client. Necessary for basic functions (function added in JagCmdHandler) to work.*/
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	init(): Promise<any> {
		return Promise.all([
			this.registerEvents(join(__dirname, '..', 'events'))
		]);
	}
}

export default Client;
