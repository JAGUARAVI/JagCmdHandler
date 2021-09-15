import { Collection, MessageEmbed, Interaction } from 'discord.js';
import Client from '../classes/Client';
import Middleware from '../classes/base/Middleware';
declare const _default: {
    new (client: Client): {
        client: Client;
        cooldowns: Collection<string, Collection<string, number>>;
        checks: Middleware;
        getErrorEmbed(msg: string, large?: boolean): MessageEmbed;
        handle(client: Client, interaction: Interaction, next: () => void, defaultChecks?: boolean): Promise<void>;
    };
};
export = _default;
