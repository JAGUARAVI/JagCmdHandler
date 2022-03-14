import {
	Collection,
	EmbedBuilder,
	TextChannel,
	GuildMember,
	Colors,
	ModalBuilder,
	ActionRowBuilder,
	TextInputBuilder,
	InteractionCollector,
	InteractionType,
	ModalSubmitInteraction,
	ComponentType,
	ButtonStyle
} from 'discord.js';

import {
	MessageOptions,
	Message,
	CommandContext,
	PromptOptions
} from '../types';

import Client from '../classes/Client';
import Utils from '../utils';
import Middleware from '../classes/base/Middleware';
import Paginate from './Paginate';
import DeletableMessage from './DeletableMessage';
import ms from 'pretty-ms';
import { ButtonBuilder } from '@discordjs/builders';

export = class TextCommandHandler {
	client: Client;

	cooldowns = new Collection<string, Collection<string, number>>();
	messageReplies = new Map<string, Array<string>>();
	checks = new Middleware();

	constructor(client: Client) {
		this.client = client;

		this.client.on('messageDelete', async (message) => {
			this.messageReplies.get(message.id)?.map(async (id) => {
				await message.channel.messages.cache.get(id)?.delete().catch(() => { /* eslint-disable-line @typescript-eslint/no-empty-function */ });
			});
			this.messageReplies.delete(message.id);
		});
	}

	/** Extend this function to return the prefix to be used. */
	/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
	async getPrefix(client: Client, message: Message): Promise<string | Array<string>> {
		return '!';
	}

	/** Extend this function to return the language you want to use for error Embeds. */
	/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
	async getLanguage(client: Client, message: Message): Promise<string> {
		return 'en';
	}

	/** Extend this function to customize error Embeds.. */
	getErrorEmbed(msg: string, large?: boolean, language?: string): EmbedBuilder {
		if (!language) language = 'en';
		const Embed = new EmbedBuilder()
			.setColor(Colors.Red)
			.setDescription((!large ? ':x:  ' : '') + (msg ?? this.client.messages.get(language, 'error.body')));
		if (large) Embed.setAuthor({ name: this.client.messages.get(language, 'error.header'), iconURL: 'https://i.imgur.com/M6CN1Ft.png' });

		return Embed;
	}

	/** This is the function which handles the messages. */
	async handle(client: Client, message: Message, next: () => void, defaultChecks = true): Promise<void> {
		if (message.author.bot) return next();

		let prefix = await this.getPrefix(client, message);
		if (prefix == 'none') prefix = '';

		const prefixString = typeof prefix === 'string' ? Utils.general.escapeRegex(prefix) : prefix.map(Utils.general.escapeRegex).join('|');
		const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${prefixString})\\s*`);
		if (!prefixRegex.test(message.content)) return next();
		const [, matchedPrefix] = message.content.match(prefixRegex);

		let args = message.content.slice(matchedPrefix.length).trim().split(/ +/);

		const commandName = args.shift().toLowerCase();
		const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.config.aliases && cmd.config.aliases.includes(commandName));

		if (!command || command.config?.availibility == 3) return next();

		const flags: Array<string> = [];
		let argsCopy = [...args];

		args.forEach((arg) => {
			if (arg[0] === '-' && arg[1] === '-' && arg[2] != undefined) {
				flags.push(arg.slice(2));
				argsCopy = Utils.general.removeFromArray(argsCopy, arg);
			}
		});
		args = argsCopy;

		const language = await this.getLanguage(client, message);

		const send = async (content: MessageOptions) => {
			try {
				if (typeof content === 'string') content = { content };
				const del = content.delete != false;
				const msg = await (del ? new DeletableMessage({ send: message.channel.send.bind(message.channel) }, content).start(message.member) : message.channel.send(content));

				if (del) {
					let arr = this.messageReplies.get(message.id);
					if (!arr) arr = [];
					arr.push(msg.id);
					this.messageReplies.set(message.id, arr);
				}
				return msg;
			} catch (e) {
				Utils.logger.error(e);
			}
		};

		const reply = async (content: MessageOptions) => {
			try {
				if (typeof content === 'string') content = { content };
				content.failIfNotExists = false;
				const del = content.delete != false;
				const msg = await (del ? new DeletableMessage({ send: message.reply.bind(message) }, content).start(message.member) : message.reply(content));

				if (del) {
					let arr = this.messageReplies.get(message.id);
					if (!arr) arr = [];
					arr.push(msg.id);
					this.messageReplies.set(message.id, arr);
				}
				return msg;
			} catch (e) {
				Utils.logger.error(e);
			}
		};

		const paginate = async (options: MessageOptions) => {
			try {
				const paginator = new Paginate({ send }, options);
				await paginator.start({ user: message.author });

				let arr = this.messageReplies.get(message.id);
				if (!arr) arr = [];
				arr.push(paginator.message.id);
				this.messageReplies.set(message.id, arr);

				return paginator.message;
			} catch (e) {
				Utils.logger.error(e);
			}
		};

		const prompt = async (options: PromptOptions): Promise<{ [key: string]: string }[]> => {
			// eslint-disable-next-line no-async-promise-executor
			return new Promise(async (resolve, reject) => {
				const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

				const Modal = new ModalBuilder()
					.setTitle(options.title ?? 'Enter Input')
					.setCustomId(randomString)
					.setComponents(...Utils.general.chunk(options.components, 5).map((chunk) =>
						new ActionRowBuilder<TextInputBuilder>({ components: chunk.map((component) => new TextInputBuilder(component).toJSON()) })
					));

				message.reply({
					content: `<@${message.user.id}> please click below.`,
					components: [
						new ActionRowBuilder<ButtonBuilder>().addComponents(
							new ButtonBuilder()
								.setCustomId('submit')
								.setLabel('Click Here')
								.setStyle(ButtonStyle.Success)
						)
					],
					allowedMentions: {
						repliedUser: true,
					}
				});

				const buttonCollector = message.createMessageComponentCollector({
					time: 60000,
					componentType: ComponentType.Button,
					filter: (button) => button.customId === 'submit',
				});

				let autoEnd = true;

				buttonCollector.on('collect', (button) => {
					if (button.user.id !== message.user.id)
						return button.reply({
							embeds: [
								this.getErrorEmbed(client.messages.parseVariables(client.messages.get(language, 'command.interaction'), {
									user: `<@${message.user.id}>`
								}))
							],
							ephemeral: false,
						});
					else {
						autoEnd = true;
						buttonCollector.stop();
						button.showModal(Modal);
					}
				}).on('end', (collected, reason) => autoEnd ? reject(reason) : null);

				const modalCollector = new InteractionCollector(client, {
					channel: message.channel,
					interactionType: InteractionType.ModalSubmit,
					time: 60000,
					filter: (modal: ModalSubmitInteraction) => modal.customId == randomString
				});

				modalCollector.on('collect', (modalInteraction) => {
					if (modalInteraction.isModalSubmit() && modalInteraction.customId == randomString) {
						modalCollector.stop();
						return resolve(modalInteraction.fields.components.components.map((component) => { return { [component.customId]: component.value }; }));
					}
				})
					.on('end', (collected, reason) => {
						reject(reason);
					});
			});
		};

		message.user = message.author;

		const ctx: CommandContext = {
			source: message,
			isApplicationCommand: false,
			send,
			reply,
			paginate,
			prompt: prompt.bind(this),
			language,
			args,
			flags,
			client
		};

		let timestamps: Collection<string, number>, now: number, cooldownAmount: number;
		if (defaultChecks) {
			if (command.permissions.botOwnerOnly && !client.data.owners.includes(ctx.source.member.user.id)) {
				const Embed = this.getErrorEmbed(client.messages.get(ctx.language, 'command.ownerOnly'));
				ctx.send({
					embeds: [Embed]
				});
				return next();
			}

			if (command.permissions.serverOwnerOnly && ctx.source.member.user.id !== ctx.source.guild.ownerId) {
				const Embed = this.getErrorEmbed(client.messages.get(ctx.language, 'command.serverOwnerOnly'));
				ctx.send({
					embeds: [Embed]
				});
				return next();
			}

			if (command.permissions.client) {
				if (!ctx.source.guild.me.permissions.has(command.permissions.client) && !ctx.source.guild.me.permissionsIn(ctx.source.channelId).has(command.permissions.client)) {
					const Embed = this.getErrorEmbed(
						client.messages.parseVariables(client.messages.get(ctx.language, 'command.botInsufficientPerissions'), { perms: command.permissions.client.map((p: string | number | symbol) => `> \`- ${p.toString()}\``).join('\n') }), true
					);
					ctx.send({
						embeds: [Embed]
					}).catch(() => ctx.source.guild.members.cache.get(ctx.source.user.id)?.send({ embeds: [Embed] }));
					return next();
				}
			}

			if (command.permissions.user) {
				if (!(ctx.source.member as GuildMember).permissions.has(command.permissions.user) && !(ctx.source.member as GuildMember).permissionsIn(ctx.source.channelId).has(command.permissions.user)) {
					const Embed = this.getErrorEmbed(
						client.messages.parseVariables(
							client.messages.get(ctx.language, 'command.userInsufficientPerissions'), { perms: command.permissions.user.map((p: string | number | symbol) => `> \`- ${p.toString()}\``).join('\n') }
						),
						true
					);
					ctx.send({
						embeds: [Embed]
					}).catch(() => ctx.source.guild.members.cache.get(ctx.source.user.id)?.send({ embeds: [Embed] }));
					return next();
				}
			}

			if (command.config.args && !args.length && command.config.usage) {
				ctx.send({
					embeds: [this.getErrorEmbed(
						client.messages.parseVariables(
							client.messages.get(ctx.language, 'command.arguments'), { user: `<@${ctx.source.user.id}>`, usage: command.config.usage }
						)
					)]
				});
				return next();
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
				if (command.config.deleteAuthorMessage && message.deletable) message.delete().catch(() => { /* eslint-disable-line @typescript-eslint/no-empty-function */ });
				timestamps.set(ctx.source.user.id, now);
				setTimeout(() => timestamps.delete(ctx.source.user.id), cooldownAmount);
			}
		} catch (e: any) {	// eslint-disable-line @typescript-eslint/no-explicit-any
			ctx.reply({
				embeds: [this.getErrorEmbed(client.messages.parseVariables(ctx.client.messages.get(ctx.language, 'errors.body') + '\n' + ctx.client.messages.get(ctx.language, 'errors.message'), { error: e.message ?? e }), true)],
				allowedMentions: { repliedUser: false },
			});
			Utils.logger.error(e);
		}
		return next();
	}
}