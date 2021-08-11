import { MessageActionRow, MessageButton, MessageEmbed, TextChannel, MessageOptions, MessagePayload, GuildMember, User, InteractionCollector, ButtonInteraction } from 'discord.js';
import { PsuedoMessage, Message } from '../types';

export = class DeletableMessage {
    channel: TextChannel;
    content: MessageOptions | MessagePayload;
    member: GuildMember | User;
    message: Message | PsuedoMessage;
    collector: InteractionCollector<ButtonInteraction>;

    constructor(channel: TextChannel | any, content: MessageOptions | MessagePayload) {
        this.channel = channel;
        this.content = content;

        if (typeof this.content != 'object') {
            this.content = { content: this.content };
        }
    }

    generateButton(id: number | string): MessageActionRow {
        return new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`5-${id}`)
                    .setStyle('DANGER')
                    .setEmoji('<:trash:852511333165563915>')
            );
    }

    async start(member?: GuildMember | User): Promise<Message | PsuedoMessage> {
        if (member) this.member = member;

        this.message = await this.channel.send(
            Object.assign(
                { components: [this.generateButton(this.member.id)] },
                { delete: false },
                this.content
            )
        );

        this.collector = this.message.createMessageComponentCollector();
        this.collector.on('collect', this._handleInteraction.bind(this));

        return this.message;
    }

    async _handleInteraction(interaction: ButtonInteraction): Promise<void> {
        if(interaction.customId !== `5-${this.member.id}`) return;

        if (interaction.user.id != this.member.id) {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`Only <@${this.member.id}> can interact with this message.`)
                        .setColor('RED')
                ],
                ephemeral: true
            });
        } else {
            interaction.deferUpdate();
            this.message.delete().catch(() => { });
        }
    }
}