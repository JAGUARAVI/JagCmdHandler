import Client from './Client';
import { Guild, User, Role, GuildMember, Channel } from 'discord.js';
export default class Resolve {
    client: Client;
    constructor(client: Client);
    user(search: string): Promise<User | void>;
    member(search: string, guild: Guild): Promise<GuildMember | void>;
    role(search: string, guild: Guild): Role | null;
    channel(search: string, guild: Guild): Channel | null;
}
