import { Guild, Collection, MessageEmbed, TextChannel, Interaction } from 'discord.js';
import { MessageOptions, Message, CommandContext, PsuedoMessage } from '../types';

import Client from '../classes/Client';
import Utils from '../utils';
import Middleware from '../classes/base/Middleware';
import Paginate from './Paginate';
import DeletableMessage from './DeletableMessage';
import ms from 'pretty-ms';
import { GuildMember } from 'discord.js';

export = class InteractionCommandHandler {
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

    async handle(client: Client, interaction: Interaction, next: () => void, defaultChecks = true): Promise<void> {
        if (!interaction.isCommand()) return next();

        const command = client.commands.get(interaction.commandName)
        if (!command) return next();

        const _reply = (async (content: MessageOptions): Promise<Message | PsuedoMessage> => {
            if (!content.ephemeral) content.fetchReply = true;

            const replied = interaction.replied;
            const func = (replied ? interaction.editReply.bind(interaction) : interaction.reply.bind(interaction));

            const sent = await func(content);

            if (content.ephemeral) {
                return {
                    ...content,
                    edit: interaction.editReply.bind(interaction) as (content: MessageOptions) => Promise<Message>,
                    delete: interaction.deleteReply.bind(interaction),
                    channel: interaction.channel
                } as PsuedoMessage;
            }

            return sent as Message;
        }).bind(this);

        const reply = (async (content: MessageOptions) => {
            let del = content.delete != false;
            if(content.ephemeral) del = false;
            const msg = await (del ? new DeletableMessage({ send: _reply }, content).start(interaction.member as GuildMember) : _reply(content));
            return msg;
        }).bind(this);

        const send = reply;

        const paginate = (async (options: MessageOptions) => {
            const paginator = new Paginate({ send: _reply }, options);
            await paginator.start({ user: interaction.user });
            return paginator.message;
        }).bind(this);

        const ctx: CommandContext = {
            source: interaction,
            isCommand: true,
            send,
            reply,
            paginate,
            args: [],
            flags: [],
            client
        }

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

        await this.checks.run(ctx, command);

        try {
            const success = await command.run(ctx);
            if (success !== false && defaultChecks) {
                timestamps.set(ctx.source.user.id, now);
                setTimeout(() => timestamps.delete(ctx.source.user.id), cooldownAmount);
            }
        } catch (e) {
            let embed = this.getErrorEmbed(`Something went wrong executing that command\nError Message: \`${e.message ?? e}\``, true);
            ctx.reply({
                embeds: [embed],
                allowedMentions: { repliedUser: false },
                ephemeral: true
            });
            Utils.logger.error(e);
        }
        return next();
    }
}