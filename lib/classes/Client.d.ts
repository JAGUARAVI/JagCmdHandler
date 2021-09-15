import { Client as BaseClient, Collection, ApplicationCommand, Guild, GuildResolvable } from 'discord.js';
import { ClientOptions } from '../types';
import BaseCommand from './base/BaseCommand';
import BaseEvent from './base/BaseEvent';
import Utils from '../utils';
import Handler from './Handler';
import Resolve from './Resolve';
declare class Client extends BaseClient {
    data: {
        [key: string]: any;
        owners: Array<string>;
    };
    debug: boolean;
    utils: typeof Utils;
    log: {
        info: (text: any, str?: string) => void;
        success: (text: any, str?: string) => void;
        warn: (text: any, str?: string) => void;
        error: (text: any, str?: string) => void;
        debug: (text: any, str?: string) => void;
    };
    events: Collection<string, BaseEvent>;
    commands: Collection<string, BaseCommand>;
    applicationCommands: Collection<string, Collection<string, ApplicationCommand<{
        guild?: GuildResolvable;
    }>>>;
    textCommandHandler: Handler;
    applicationCommandHandler: Handler;
    resolve: Resolve;
    constructor(options: ClientOptions);
    registerCommand(dir: string, category: string): boolean | string;
    registerCommands(dir: string): Promise<void>;
    registerApplicationCommands(guild: Guild): Promise<Collection<string, ApplicationCommand<{
        guild?: GuildResolvable;
    }>>>;
    unregisterApplicationCommands(guild: Guild): Promise<Collection<string, ApplicationCommand<{
        guild?: GuildResolvable;
    }>>>;
    registerEvents(dir: string, target?: any): Promise<void>;
    init(): Promise<any>;
}
export default Client;
