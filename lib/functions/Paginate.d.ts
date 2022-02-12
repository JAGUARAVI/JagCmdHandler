/// <reference types="node" />
import { MessageActionRow, MessageEmbed, TextChannel, MessagePayload, InteractionCollector, ButtonInteraction } from 'discord.js';
import { Message, MessageOptions } from '../types';
declare const _default: {
    new (channel: TextChannel | any, data: {
        [key: string]: any;
    }): {
        channel: TextChannel | any;
        content: MessageOptions | MessagePayload;
        user: string;
        message: Message;
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
        refresh: boolean;
        refreshData?: () => unknown;
        ephemeral: boolean;
        time: number;
        timeout: NodeJS.Timeout;
        filter(interaction: ButtonInteraction): boolean;
        generateButtons(size: number, currentPage: number, disabled?: boolean): Array<MessageActionRow>;
        generatePages(): void;
        start(options?: {
            [key: string]: any;
        }, page?: number): Promise<Message>;
        update(options: {
            [key: string]: any;
        }, page?: number): Promise<Message>;
        stop(): Promise<void>;
        generateMessage(disabled?: boolean): MessageOptions;
        _handleInteraction(interaction: ButtonInteraction): Promise<void>;
    };
};
export = _default;
