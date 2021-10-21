import { MessageActionRow, TextChannel, MessageOptions, GuildMember, User, InteractionCollector, ButtonInteraction } from 'discord.js';
import { Message } from '../types';
declare const _default: {
    new (channel: TextChannel | any, content: MessageOptions): {
        channel: TextChannel;
        content: MessageOptions;
        user: string;
        message: Message;
        collector: InteractionCollector<ButtonInteraction>;
        filter(interaction: ButtonInteraction): boolean;
        generateButton(): MessageActionRow;
        start(member?: GuildMember | User): Promise<Message>;
        _handleInteraction(interaction: ButtonInteraction): Promise<void>;
    };
};
export = _default;
