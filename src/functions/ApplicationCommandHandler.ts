import { Collection, Embed, TextChannel, GuildMember, Colors, CommandInteraction } from 'discord.js';
import { MessageOptions, Message, CommandContext } from '../types';

import Client from '../classes/Client';
import Utils from '../utils';
import Middleware from '../classes/base/Middleware';
import Paginate from './Paginate';
import DeletableMessage from './DeletableMessage';
import ms from 'pretty-ms';

export = class InteractionCommandHandler {
	client: Client;

	cooldowns = new Collection<string, Collection<string, number>>();
	checks = new Middleware();

	constructor(client: Client) {
		this.client = client;
	}

	/** Extend this function to return the language you want to use for error embeds. */
	async getLanguage(client: Client, interaction: CommandInteraction): Promise<string> {
		if (interaction.guildLocale) return interaction.guildLocale.substring(0, 2);
		else if (interaction.locale) return interaction.locale.substring(0, 2);
		else return 'en';
	}

	/** Extend this function to customize error embeds.. */
	getErrorEmbed(msg: string, large?: boolean, language?: string): Embed {
		if (!language) language = 'en';
		const embed = new Embed()
			.setColor(Colors.Red)
			.setDescription((!large ? ':x:  ' : '') + (msg ?? this.client.messages.get(language, 'error.body')));
		if (large) embed.setAuthor({ name: this.client.messages.get(language, 'error.header'), iconURL: 'https://i.imgur.com/M6CN1Ft.png' });

		return embed;
	}

	/** This is the function which handles the interactions. */
	async handle(client: Client, interaction: CommandInteraction, next: () => void, defaultChecks = true): Promise<void> {
		if (!interaction.isChatInputCommand() && !interaction.isContextMenuCommand() && !interaction.isAutocomplete()) return next();

		const command = client.commands.get(interaction.commandName);
		if (!command || command.config?.availibility == 1) return next();

		if (interaction.isAutocomplete()) {
			return interaction.respond(await command.autocomplete(interaction));
		}

		const _reply = async (content: MessageOptions): Promise<Message> => {
			if (typeof content === 'string') content = { content };
			content.fetchReply = true;
			const replied = interaction.replied || interaction.deferred;
			const func = (replied ? interaction.editReply.bind(interaction) : interaction.reply.bind(interaction));
			return await func(content) as Message;
		};

		const reply = async (content: MessageOptions) => {
			try {
				const del = content.delete != false && !content.ephemeral;
				return await (del ? new DeletableMessage({ send: _reply }, content).start(interaction.member as GuildMember) : _reply(content));
			} catch (e) {
				Utils.logger.error(e);
			}
		};

		const send = reply;

		const paginate = async (options: MessageOptions) => {
			try {
				const paginator = new Paginate({ send: _reply }, options);
				await paginator.start({ user: interaction.user });
				return paginator.message;
			} catch (e) {
				Utils.logger.error(e);
			}
		};

		const prompt = async (options: MessageOptions) => {
			try {
				if (!(interaction.replied || interaction.deferred)) await interaction.deferReply();

				const msg = await interaction.followUp(options) as Message;

				const replies = await interaction.channel.awaitMessages({
					max: 1,
					time: 60000,
					errors: ['time'],
					filter: (m) => m.author.id === interaction.user.id
				});

				msg.delete?.().catch(() => { /* eslint-disable-line @typescript-eslint/no-empty-function */ });
				return replies.first();
			} catch (e) {
				Utils.logger.error(e);
			}
		};

		const ctx: CommandContext = {
			source: interaction,
			isApplicationCommand: true,
			send,
			reply,
			paginate,
			prompt,
			language: await this.getLanguage(this.client, interaction),
			args: [],
			flags: [],
			client
		};

		let timestamps: Collection<string, number>, now: number, cooldownAmount: number;
		if (defaultChecks) {
			if (command.permissions.botOwnerOnly && !client.data.owners.includes(ctx.source.member.user.id)) {
				const embed = this.getErrorEmbed(client.messages.get(ctx.language, 'command.ownerOnly'));
				ctx.send({
					embeds: [embed]
				});
				return next();
			}

			if (command.permissions.serverOwnerOnly && ctx.source.member.user.id !== ctx.source.guild.ownerId) {
				const embed = this.getErrorEmbed(client.messages.get(ctx.language, 'command.serverOwnerOnly'));
				ctx.send({
					embeds: [embed]
				});
				return next();
			}

			if (command.permissions.client) {
				if (!ctx.source.guild.me.permissions.has(command.permissions.client) && !ctx.source.guild.me.permissionsIn(ctx.source.channelId).has(command.permissions.client)) {
					const embed = this.getErrorEmbed(
						client.messages.parseVariables(client.messages.get(ctx.language, 'command.botInsufficientPerissions'), { perms: command.permissions.client.map((p: string | number | symbol) => `> \`- ${p.toString()}\``).join('\n') }), true
					);
					ctx.send({
						embeds: [embed]
					}).catch(() => ctx.source.guild.members.cache.get(ctx.source.user.id)?.send({ embeds: [embed] }));
					return next();
				}
			}

			if (command.permissions.user) {
				if (!(ctx.source.member as GuildMember).permissions.has(command.permissions.user) && !(ctx.source.member as GuildMember).permissionsIn(ctx.source.channelId).has(command.permissions.user)) {
					const embed = this.getErrorEmbed(
						client.messages.parseVariables(client.messages.get(ctx.language, 'command.userInsufficientPerissions'), { perms: command.permissions.user.map((p: string | number | symbol) => `> \`- ${p.toString()}\``).join('\n') }), true
					);
					ctx.send({
						embeds: [embed]
					}).catch(() => ctx.source.guild.members.cache.get(ctx.source.user.id)?.send({ embeds: [embed] }));
					return next();
				}
			}

			if (command.config.nsfw && !(ctx.source.channel as TextChannel).nsfw) {
				ctx.send({
					embeds: [this.getErrorEmbed(client.messages.get(ctx.language, 'command.nsfw'))],
				});
				return next();
			}

			if (!this.cooldowns.has(command.config.name)) this.cooldowns.set(command.config.name, new Collection());
			now = Date.now();
			timestamps = this.cooldowns.get(command.config.name);
			cooldownAmount = (command.config.cooldown || 5) * 1000;
			if (timestamps.has(ctx.source.user.id)) {
				const expirationTime = timestamps.get(ctx.source.user.id) + cooldownAmount;
				if (now < expirationTime && !client.data.owners.includes(ctx.source.user.id)) {
					const timeLeft = Math.floor(expirationTime - now);
					ctx.send({
						embeds: [this.getErrorEmbed(client.messages.parseVariables(client.messages.get(ctx.language, 'command.cooldown'), { time: ms(timeLeft) }))],
					});
					return next();
				}
			}
		}

		await this.checks.run(ctx, command);

		try {
			const success = await command.run(ctx);
			if (success !== false && defaultChecks) {
				timestamps.set(ctx.source.user.id, now);
				setTimeout(() => timestamps.delete(ctx.source.user.id), cooldownAmount);
			}
		} catch (e: any) {	// eslint-disable-line  @typescript-eslint/no-explicit-any
			ctx.reply({
				embeds: [this.getErrorEmbed(client.messages.parseVariables(ctx.client.messages.get(ctx.language, 'errors.body') + '\n' + ctx.client.messages.get(ctx.language, 'errors.message'), { error: e.message ?? e }), true)],
				allowedMentions: { repliedUser: false },
				ephemeral: true
			});
			Utils.logger.error(e);
		}
		return next();
	}
}
