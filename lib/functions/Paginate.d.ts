import { MessageActionRow, MessageEmbed, TextChannel, MessagePayload, InteractionCollector, ButtonInteraction } from 'discord.js';
import { PsuedoMessage, Message, MessageOptions } from '../types';
declare const _default: {
    new (channel: TextChannel | any, data: {
        [key: string]: any;
    }): {
        channel: TextChannel | any;
        content: MessageOptions | MessagePayload;
        user: string;
        message: Message | PsuedoMessage;
        collector: InteractionCollector<ButtonInteraction>;
        pages: Array<MessageEmbed>;
        page: number;
        dataPages: Array<any>;
        color?: string;
        url?: string;
        title?: string;
        author?: {
            [a: string]: any;
        };
        footer?: {
            [a: string]: any;
        };
        thumbnail?: string;
        image?: string;
        description?: string;
        pageGen?: (embed: MessageEmbed) => void | Promise<void>;
        ephemeral: boolean;
        id: number;
        filter(interaction: ButtonInteraction): boolean;
        generateButtons(size: number, currentPage: number): MessageActionRow;
        generatePages(): void;
        start(options?: {
            [key: string]: any;
        }, page?: number): Promise<Message | PsuedoMessage>;
        generateMessage(): MessageOptions;
        _handleInteraction(interaction: ButtonInteraction): Promise<void>;
    };
};
export = _default;
