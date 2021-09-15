"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Resolve {
    constructor(client) {
        this.client = client;
    }
    user(search) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!search || typeof search !== 'string')
                return null;
            let user = null;
            if (search.match(/^<@!?(\d+)>$/))
                user = yield this.client.users.fetch(search.match(/^<@!?(\d+)>$/)[1]).catch(() => { });
            if (search.match(/^!?(\w+)#(\d+)$/) && !user)
                user = this.client.users.cache.find((u) => u.username === search.match(/^!?(\w+)#(\d+)$/)[0] && u.discriminator === search.match(/^!?(\w+)#(\d+)$/)[1]);
            if (search.match(/.{2,32}/) && !user)
                user = this.client.users.cache.find((u) => u.username === search);
            if (!user)
                user = yield this.client.users.fetch(search).catch(() => { });
            return user;
        });
    }
    member(search, guild) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!search || typeof search !== 'string')
                return null;
            const user = yield this.user(search);
            if (!user)
                return null;
            return guild.members.fetch(user).catch(() => { });
        });
    }
    role(search, guild) {
        if (!search || typeof search !== 'string')
            return null;
        let role = null;
        if (search.match(/^<@&!?(\d+)>$/))
            role = guild.roles.cache.get(search.match(/^<@&!?(\d+)>$/)[1]);
        if (!role)
            role = guild.roles.cache.find((r) => r.name === search);
        if (!role)
            role = guild.roles.cache.get(search);
        return role;
    }
    channel(search, guild) {
        if (!search || typeof search !== 'string')
            return null;
        let channel = null;
        if (search.match(/^<#!?(\d+)>$/))
            channel = guild.channels.cache.get(search.match(/^<#!?(\d+)>$/)[1]);
        if (!channel)
            channel = guild.channels.cache.find((c) => c.name === search);
        if (!channel)
            channel = guild.channels.cache.get(search);
        return channel;
    }
}
exports.default = Resolve;
