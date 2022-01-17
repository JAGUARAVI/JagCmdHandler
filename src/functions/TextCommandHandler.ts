import { Collection, MessageEmbed, TextChannel, GuildMember } from 'discord.js';
import { MessageOptions, Message, CommandContext } from '../types';

import Client from '../classes/Client';
import Utils from '../utils';
import Middleware from '../classes/base/Middleware';
import Paginate from './Paginate';
import DeletableMessage from './DeletableMessage';
import ms from 'pretty-ms';

export = class TextCommandHandler {
	client: Client;

	cooldowns = new Collection<string, Collection<string, number>>();
	messageReplies = new Collection<string, Array<string>>();
	checks = new Middleware();

	constructor(client: Client) {
		this.client = client;

		this.client.on('messageDelete', async (message) => {
			this.messageReplies.get(message.id)?.map(async (id) => {
				await message.channel.messages.cache.get(id)?.delete().catch(() => { /* eslint-disable-line @typescript-eslint/no-empty-function */ });
			});
		});
	}

	async getPrefix(client: Client, message: Message): Promise<string | Array<string>> { /* eslint-disable-line @typescript-eslint/no-unused-vars */
		return '!';
	}

	getErrorEmbed(msg: string, large?: boolean): MessageEmbed {
		const embed = new MessageEmbed()
			.setColor('RED')
			.setDescription((!large ? ':x:  ' : '') + (msg ?? 'Error'));
		if (large) embed.setAuthor({ name: 'Error', iconURL: 'https://i.imgur.com/M6CN1Ft.png' });

		return embed;
	}

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

		if (!command) return next();

		const flags: Array<string> = [];
		let argsCopy = [...args];

		args.forEach((arg) => {
			if (arg[0] === '-' && arg[1] === '-' && arg[2] != undefined) {
				flags.push(arg.slice(2));
				argsCopy = Utils.general.removeFromArray(argsCopy, arg);
			}
		});
		args = argsCopy;

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

		const prompt = async (options: MessageOptions) => {
			try {
				const msg = await message.channel.send(options);

				const reply = await message.channel.awaitMessages({
					max: 1,
					time: 60000,
					errors: ['time'],
					filter: (m) => m.author.id === message.author.id
				});

				msg.delete().catch(() => { /* eslint-disable-line @typescript-eslint/no-empty-function */ });
				return reply.first();
			} catch (e) {
				Utils.logger.error(e);
			}
		};

		message.user = message.author;

		const ctx: CommandContext = {
			source: message,
			isCommand: false,
			send,
			reply,
			paginate,
			prompt,
			args,
			flags,
			client
		};

		await this.checks.run(ctx, command);

		let timestamps: Collection<string, number>, now: number, cooldownAmount: number;
		if (defaultChecks) {
			if (command.permissions.botOwnerOnly && !client.data.owners.includes(ctx.source.member.user.id)) {
				const embed = this.getErrorEmbed('This is a owner only command!');
				ctx.send({
					embeds: [embed]
				});
				return next();
			}

			if (command.permissions.serverOwnerOnly && ctx.source.member.user.id !== ctx.source.guild.ownerId) {
				const embed = this.getErrorEmbed('This is a server owner only command!');
				ctx.send({
					embeds: [embed]
				});
				return next();
			}

			if (command.permissions.clientPerms) {
				if (!ctx.source.guild.me.permissions.has(command.permissions.clientPerms) && !ctx.source.guild.me.permissionsIn(ctx.source.channelId).has(command.permissions.clientPerms)) {
					const embed = this.getErrorEmbed(
						`Sorry, but i need the following permisions to perform this command -\n${command.permissions.clientPerms.map((p: string) => `> \`- ${p}\``).join('\n')}`, true
					);
					ctx.send({
						embeds: [embed]
					}).catch(() => ctx.source.guild.members.cache.get(ctx.source.user.id)?.send({ embeds: [embed] }));
					return next();
				}
			}

			if (command.permissions.userPerms) {
				if (!(ctx.source.member as GuildMember).permissions.has(command.permissions.userPerms) && !(ctx.source.member as GuildMember).permissionsIn(ctx.source.channelId).has(command.permissions.userPerms)) {
					const embed = this.getErrorEmbed(
						`Sorry, but you don't have enough permissions to execute this command. You need the following permissions -\n${command.permissions.userPerms.map((p: string) => `> \`- ${p}\``).join('\n')}`,
						true
					);
					ctx.send({
						embeds: [embed]
					}).catch(() => ctx.source.guild.members.cache.get(ctx.source.user.id)?.send({ embeds: [embed] }));
					return next();
				}
			}

			if (command.config.args && !args.length && command.config.usage) {
				const embed = this.getErrorEmbed(`You didn't provide any arguments, ${ctx.source.member}!\nThe proper usage would be: \n\`\`\`html\n${command.config.usage}\n\`\`\``, true);
				ctx.send({
					embeds: [embed]
				});
				return next();
			}
			if (command.config.nsfw && !(ctx.source.channel as TextChannel).nsfw) {
				const embed = this.getErrorEmbed('Sorry, i can\'t run nsfw commands on a non-nsfw channel.');
				ctx.send({
					embeds: [embed],
				});
				return next();
			}

			if (!this.cooldowns.has(command.config.name)) this.cooldowns.set(command.config.name, new Collection());
			now = Date.now();
			timestamps = this.cooldowns.get(command.config.name);
			cooldownAmount = (command.config.cooldown || 3) * 1000;
			if (timestamps.has(ctx.source.user.id)) {
				const expirationTime = timestamps.get(ctx.source.user.id) + cooldownAmount;
				if (now < expirationTime && !client.data.owners.includes(ctx.source.user.id)) {
					const timeLeft = Math.floor(expirationTime - now);
					const embed = this.getErrorEmbed(`Please wait **${ms(timeLeft)}** before reusing the command again.`);
					ctx.send({
						embeds: [embed],
					});
					return next();
				}
			}
		}

		try {
			const success = await command.run(ctx);
			if (success !== false && defaultChecks) {
				if (command.config.deleteAuthorMessage && message.deletable) message.delete().catch(() => { /* eslint-disable-line @typescript-eslint/no-empty-function */ });
				timestamps.set(ctx.source.user.id, now);
				setTimeout(() => timestamps.delete(ctx.source.user.id), cooldownAmount);
			}
		} catch (e: any) {	// eslint-disable-line @typescript-eslint/no-explicit-any
			const embed = this.getErrorEmbed(`Something went wrong executing that command\nError Message: \`${e.message ?? e}\``, true);
			ctx.reply({
				embeds: [embed],
				allowedMentions: { repliedUser: false },
			});
			Utils.logger.error(e);
		}
		return next();
	}
}