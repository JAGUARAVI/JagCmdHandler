import { MessageActionRow, TextChannel, MessageOptions, MessagePayload, GuildMember, User, InteractionCollector, ButtonInteraction } from 'discord.js';
import { PsuedoMessage, Message } from '../types';
declare const _default: {
    new (channel: TextChannel | any, content: MessageOptions | MessagePayload): {
        channel: TextChannel;
        content: MessageOptions | MessagePayload;
        user: string;
        message: Message | PsuedoMessage;
        collector: InteractionCollector<ButtonInteraction>;
        id: number;
        filter(interaction: ButtonInteraction): boolean;
        generateButton(): MessageActionRow;
        start(member?: GuildMember | User): Promise<Message | PsuedoMessage>;
        _handleInteraction(interaction: ButtonInteraction): Promise<void>;
    };
};
export = _default;
