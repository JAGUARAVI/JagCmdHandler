import { CommandContext, CommandConfig, CommandPermissions } from '../../types';
import { ApplicationCommandOptionChoice, AutocompleteInteraction } from 'discord.js';
import Client from '../Client';

export default class BaseCommand {
	config: CommandConfig;
	permissions: CommandPermissions;
	data: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		[key: string]: any
	};

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	constructor(data: { config: CommandConfig, permissions: CommandPermissions, data: { [key: string]: any } }) {
		this.config = data.config;
		this.permissions = data.permissions;
		this.data = data.data;
	}

	/** Use if you have an Autocomplete option. Return the data and don't use `AutocompleteInteraction#respond` */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async autocomplete(client: Client, interaction: AutocompleteInteraction): Promise<Array<ApplicationCommandOptionChoice>> {
		return [];
	}

	/** Command body which gets executed. */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async run(ctx: CommandContext): Promise<any> {
		ctx.reply({
			content: ctx.client.messages.get(ctx.language, 'command.notImplemented'),
			allowedMentions: { repliedUser: false }
		});
	}
}