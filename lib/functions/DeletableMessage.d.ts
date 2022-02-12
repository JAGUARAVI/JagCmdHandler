import { MessageActionRow, TextChannel, GuildMember, User, InteractionCollector, ButtonInteraction } from 'discord.js';
import { Message, MessageOptions } from '../types';
declare const _default: {
    new (channel: TextChannel | any, content: MessageOptions): {
        channel: TextChannel;
        content: MessageOptions;
        user: string;
        message: Message;
        collector: InteractionCollector<ButtonInteraction>;
        time: number;
        filter(interaction: ButtonInteraction): boolean;
        generateButton(disabled?: boolean): MessageActionRow;
        start(member?: GuildMember | User): Promise<Message>;
        stop(): Promise<void>;
        _handleInteraction(interaction: ButtonInteraction): Promise<void>;
    };
};
export = _default;
