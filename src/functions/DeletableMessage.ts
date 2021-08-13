import { MessageActionRow, MessageButton, MessageEmbed, TextChannel, MessageOptions, MessagePayload, GuildMember, User, InteractionCollector, ButtonInteraction } from 'discord.js';
import { PsuedoMessage, Message } from '../types';

export = class DeletableMessage {
    channel: TextChannel;
    content: MessageOptions | MessagePayload;
    user: string;
    message: Message | PsuedoMessage;
    collector: InteractionCollector<ButtonInteraction>;
    id: number;

    constructor(channel: TextChannel | any, content: MessageOptions | MessagePayload) {
        this.channel = channel;
        this.content = content;
        this.id = Date.now() + Math.floor(Math.random() * 100000);

        if (typeof this.content != 'object') {
            this.content = { content: this.content };
        }
    }

    filter(interaction: ButtonInteraction): boolean {
        if (interaction.customId === `5-${this.user}-${this.id}`) return true;
        return false;
    }

    generateButton(): MessageActionRow {
        return new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`5-${this.user}-${this.id}`)
                    .setStyle('DANGER')
                    .setEmoji('<:trash:852511333165563915>')
            );
    }

    async start(member?: GuildMember | User): Promise<Message | PsuedoMessage> {
        if (member) this.user = member.id;

        this.message = await this.channel.send(
            Object.assign(
                { components: [this.generateButton()] },
                { delete: false, ephemeral: false },
                this.content
            )
        );

        this.collector = this.message.channel.createMessageComponentCollector({ componentType: 'BUTTON', filter: this.filter.bind(this) });
        this.collector.on('collect', this._handleInteraction.bind(this));

        return this.message;
    }

    async _handleInteraction(interaction: ButtonInteraction): Promise<void> {
        if (interaction.customId !== `5-${this.user}-${this.id}`) return;

        if (interaction.user.id != this.user) {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`Only <@${this.user}> can interact with this message.`)
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