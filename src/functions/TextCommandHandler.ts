import { Guild, Collection, MessageEmbed, TextChannel, GuildMember } from 'discord.js';
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
                await message.channel.messages.cache.get(id)?.delete().catch(() => { });
            })
        })
    }

    async getPrefix(client: Client, guild: Guild): Promise<string> {
        return '!';
    }

    getErrorEmbed(msg: string, large?: boolean): MessageEmbed {
        const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription((!large ? ':x:  ' : '') + (msg ?? 'Error'))
        if (large) embed.setAuthor('Error', 'https://i.imgur.com/M6CN1Ft.png')

        return embed;
    }

    async handle(client: Client, message: Message, next: () => void, defaultChecks = true): Promise<void> {
        if (message.author.bot) return next();

        let prefix = await this.getPrefix(client, message.guild);
        if (prefix == 'none') prefix = '';

        const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${Utils.general.escapeRegex(prefix)})\\s*`);
        if (!prefixRegex.test(message.content)) return next();

        const [, matchedPrefix] = message.content.match(prefixRegex);

        let args = message.content.slice(matchedPrefix.length).trim().split(/ +/);

        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.config.aliases && cmd.config.aliases.includes(commandName));

        if (!command) return next();

        let flags: Array<string> = [];
        let argsCopy = [...args];

        args.map((arg) => {
            if (arg[0] === '-' && arg[1] === '-' && arg[2] != undefined) {
                flags.push(arg.slice(2));
                argsCopy = Utils.general.removeFromArray(argsCopy, arg);
            }
        });
        args = argsCopy;

        const send = async (content: MessageOptions) => {
            const del = content.delete == null || content.delete != false;
            const msg = await (del ? new DeletableMessage({ send: message.channel.send.bind(message.channel) }, content).start(message.member) : message.channel.send(content));

            if (del != false) {
                let arr = this.messageReplies.get(message.id);
                if (!arr) arr = [];
                arr.push(msg.id);
                this.messageReplies.set(message.id, arr);
            }
            return msg;
        };

        const reply = async (content: MessageOptions) => {
            const del = content.delete == null || content.delete != false;
            const msg = await (del ? new DeletableMessage({ send: message.reply.bind(message) }, content).start(message.member) : message.reply(content));

            if (del != false) {
                let arr = this.messageReplies.get(message.id);
                if (!arr) arr = [];
                arr.push(msg.id);
                this.messageReplies.set(message.id, arr);
            }
            return msg;
        };

        const paginate = async (options: MessageOptions) => {
            const paginator = new Paginate({ send }, options);
            await paginator.start({ user: message.author });

            let arr = this.messageReplies.get(message.id);
            if (!arr) arr = [];
            arr.push(paginator.message.id);
            this.messageReplies.set(message.id, arr);

            return paginator.message;
        };

        message.user = message.author;

        const ctx: CommandContext = {
            source: message,
            isCommand: false,
            send,
            reply,
            paginate,
            args,
            flags,
            client
        }

        await this.checks.run(ctx, command);

        let timestamps: Collection<string, number>, now: number, cooldownAmount: number;
        if (defaultChecks) {
            if (command.permissions.botOwnerOnly && !client.data.owners.includes(ctx.source.member.user.id)) {
                let embed = this.getErrorEmbed('This is a owner only command!');
                ctx.send({
                    embeds: [embed]
                });
                return next()
            }

            if (command.permissions.serverOwnerOnly && ctx.source.member.user.id !== ctx.source.guild.ownerId) {
                let embed = this.getErrorEmbed('This is a server owner only command!');
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
                    let embed = this.getErrorEmbed(
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
                let embed = this.getErrorEmbed(`You didn't provide any arguments, ${ctx.source.member}!\nThe proper usage would be: \n\`\`\`html\n${command.config.usage}\n\`\`\``, true)
                ctx.send({
                    embeds: [embed]
                });
                return next();
            }
            if (command.config.nsfw && !(ctx.source.channel as TextChannel).nsfw) {
                let embed = this.getErrorEmbed('Sorry, i can\'t run nsfw commands on a non-nsfw channel.');
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
                    let embed = this.getErrorEmbed(`Please wait **${ms(timeLeft)}** before reusing the command again.`);
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
                if (command.config.deleteAuthorMessage && message.deletable) message.delete().catch(() => { });
                timestamps.set(ctx.source.user.id, now);
                setTimeout(() => timestamps.delete(ctx.source.user.id), cooldownAmount);
            }
        } catch (e) {
            let embed = this.getErrorEmbed(`Something went wrong executing that command\nError Message: \`${e.message ?? e}\``, true);
            ctx.reply({
                embeds: [embed],
                allowedMentions: { repliedUser: false },
            });
            Utils.logger.error(e);
        }
        return next();
    }
}