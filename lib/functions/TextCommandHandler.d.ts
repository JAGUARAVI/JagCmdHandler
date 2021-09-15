import { Collection, MessageEmbed } from 'discord.js';
import { Message } from '../types';
import Client from '../classes/Client';
import Middleware from '../classes/base/Middleware';
declare const _default: {
    new (client: Client): {
        client: Client;
        cooldowns: Collection<string, Collection<string, number>>;
        messageReplies: Collection<string, string[]>;
        checks: Middleware;
        getPrefix(client: Client, message: Message): Promise<string | Array<string>>;
        getErrorEmbed(msg: string, large?: boolean): MessageEmbed;
        handle(client: Client, message: Message, next: () => void, defaultChecks?: boolean): Promise<void>;
    };
};
export = _default;
