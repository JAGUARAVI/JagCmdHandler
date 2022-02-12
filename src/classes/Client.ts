import { Client as BaseClient, Intents, Options, Collection, ApplicationCommand, Guild, ApplicationCommandPermissionData, GuildResolvable } from 'discord.js';
import { promises as fs } from 'fs';
import { join } from 'path';
import { ClientOptions } from '../types';
import { inspect } from 'util';

import BaseCommand from './base/BaseCommand';
import BaseEvent from './base/BaseEvent';
import Utils from '../utils';
import Handler from './Handler';
import Resolve from './Resolve';

const defaultOptions: ClientOptions = {
	partials: ['USER', 'GUILD_MEMBER', 'MESSAGE', 'CHANNEL', 'REACTION'],
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
	],
	makeCache: Options.cacheWithLimits({
		MessageManager: {
			maxSize: 100,
			sweepInterval: 30
		}
	})
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

	registerCommand(dir: string, category: string): boolean | string {
		try {
			const Command = require(dir); /* eslint-disable-line @typescript-eslint/no-var-requires */
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

	async registerCommands(dir: string): Promise<void> {
		const files = await fs.readdir(dir);
		for (const file of files) {
			const filesPath = join(dir, file);
			const commands = await fs.readdir(filesPath);
			for (const command of commands) {
				if (command.endsWith('.js')) {
					const response = this.registerCommand(join(filesPath, command), file);
					if (response) this.log.error(response);
				}
			}
		}
	}

	async registerApplicationCommands(guild?: Guild): Promise<Collection<string, ApplicationCommand<{ guild?: GuildResolvable }>>> {
		const target = guild ?? this.application;

		return Promise.all(this.commands.filter(cmd => cmd.config.commandType != 1).map((command) => {
			return {
				name: command.config.name,
				description: ['MESSAGE', 3, 'USER', 2].includes(command.config.applicationType) ? null : command.config.description,
				options: command.config.commandOptions,
				defaultPermission: command.permissions.default != false,
				type: command.config.applicationType || 1,
			};
		})).then(async (data) => {
			return target?.commands.set(data).then(async (result) => {
				if (target != this.application) await Promise.all(result.map(async (command) => {
					const cmd = this.commands.get(command.name);
					if (typeof cmd?.permissions?.build === 'function') await command.permissions.add({ guild: (target as Guild), permissions: (cmd.permissions.build as (guild: Guild, command: ApplicationCommand) => Array<ApplicationCommandPermissionData>)(target as Guild, command) });
				}));
				this.applicationCommands.set(guild ? guild.id : '0', result);
				return result;
			});
		});
	}

	async unregisterApplicationCommands(guild?: Guild): Promise<Collection<string, ApplicationCommand<{ guild?: GuildResolvable }>>> {
		const target = guild ?? this.application;

		this.applicationCommands.delete(guild ? guild.id : '0');
		return target.commands.set([]);
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async registerEvents(dir: string, target?: any): Promise<void> { // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
		const defaultTarget = target == undefined;
		if (defaultTarget) target = this;
		const files = await fs.readdir(dir);
		for (const file of files) {
			if (file.endsWith('.js')) {
				// eslint-disable-next-line  @typescript-eslint/no-var-requires
				const Event = require(join(dir, file));
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
			}
		}
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	init(): Promise<any> {
		return Promise.all([
			this.registerEvents(join(__dirname, '..', 'events'))
		]);
	}
}

export default Client;
