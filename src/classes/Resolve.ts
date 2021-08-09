import Client from './Client';
import { Guild } from 'discord.js';

export default class Resolve {
    client: Client

    constructor(client: Client) {
        this.client = client;
    }

    async user(search: string) {
        if (!search || typeof search !== 'string') return null;
        let user = null;
        if (search.match(/^<@!?(\d+)>$/)) user = await this.client.users.fetch(search.match(/^<@!?(\d+)>$/)[1]).catch(() => { });
        if (search.match(/^!?(\w+)#(\d+)$/) && !user) user = this.client.users.cache.find((u) => u.username === search.match(/^!?(\w+)#(\d+)$/)[0] && u.discriminator === search.match(/^!?(\w+)#(\d+)$/)[1]);
        if (search.match(/.{2,32}/) && !user) user = this.client.users.cache.find((u) => u.username === search);
        if (!user) user = await this.client.users.fetch(search).catch(() => { });
        return user;
    }

    async member(search: string, guild: Guild) {
        if (!search || typeof search !== 'string') return null;
        const user = await this.user(search);
        if (!user) return null;
        return await guild.members.fetch(user).catch(() => { });
    }

    role(search: string, guild: Guild) {
        if (!search || typeof search !== 'string') return null;
        let role = null;
        if (search.match(/^<@&!?(\d+)>$/)) role = guild.roles.cache.get(search.match(/^<@&!?(\d+)>$/)[1]);
        if (!role) role = guild.roles.cache.find((r) => r.name === search);
        if (!role) role = guild.roles.cache.get(search);
        return role;
    }

    channel(search: string, guild: Guild) {
        if (!search || typeof search !== 'string') return null;
        let channel = null;
        if (search.match(/^<#!?(\d+)>$/)) channel = guild.channels.cache.get(search.match(/^<#!?(\d+)>$/)[1]);
        if (!channel) channel = guild.channels.cache.find((c) => c.name === search);
        if (!channel) channel = guild.channels.cache.get(search);
        return channel;
    }
}