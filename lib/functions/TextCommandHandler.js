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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const discord_js_1 = require("discord.js");
const utils_1 = __importDefault(require("../utils"));
const Middleware_1 = __importDefault(require("../classes/base/Middleware"));
const Paginate_1 = __importDefault(require("./Paginate"));
const DeletableMessage_1 = __importDefault(require("./DeletableMessage"));
const pretty_ms_1 = __importDefault(require("pretty-ms"));
module.exports = class TextCommandHandler {
    constructor(client) {
        this.cooldowns = new discord_js_1.Collection();
        this.messageReplies = new discord_js_1.Collection();
        this.checks = new Middleware_1.default();
        this.client = client;
        this.client.on('messageDelete', (message) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            (_a = this.messageReplies.get(message.id)) === null || _a === void 0 ? void 0 : _a.map((id) => __awaiter(this, void 0, void 0, function* () {
                var _b;
                yield ((_b = message.channel.messages.cache.get(id)) === null || _b === void 0 ? void 0 : _b.delete().catch(() => { }));
            }));
        }));
    }
    getPrefix(client, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return '!';
        });
    }
    getErrorEmbed(msg, large) {
        const embed = new discord_js_1.MessageEmbed()
            .setColor('RED')
            .setDescription((!large ? ':x:  ' : '') + (msg !== null && msg !== void 0 ? msg : 'Error'));
        if (large)
            embed.setAuthor('Error', 'https://i.imgur.com/M6CN1Ft.png');
        return embed;
    }
    handle(client, message, next, defaultChecks = true) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (message.author.bot)
                return next();
            let prefix = yield this.getPrefix(client, message);
            if (prefix == 'none')
                prefix = '';
            const prefixString = typeof prefix === 'string' ? utils_1.default.general.escapeRegex(prefix) : prefix.map(utils_1.default.general.escapeRegex).join('|');
            const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${prefixString})\\s*`);
            if (!prefixRegex.test(message.content))
                return next();
            const [, matchedPrefix] = message.content.match(prefixRegex);
            let args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();
            const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.config.aliases && cmd.config.aliases.includes(commandName));
            if (!command)
                return next();
            const flags = [];
            let argsCopy = [...args];
            args.forEach((arg) => {
                if (arg[0] === '-' && arg[1] === '-' && arg[2] != undefined) {
                    flags.push(arg.slice(2));
                    argsCopy = utils_1.default.general.removeFromArray(argsCopy, arg);
                }
            });
            args = argsCopy;
            const send = (content) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (typeof content === 'string')
                        content = { content };
                    const del = content.delete != false;
                    const msg = yield (del ? new DeletableMessage_1.default({ send: message.channel.send.bind(message.channel) }, content).start(message.member) : message.channel.send(content));
                    if (del) {
                        let arr = this.messageReplies.get(message.id);
                        if (!arr)
                            arr = [];
                        arr.push(msg.id);
                        this.messageReplies.set(message.id, arr);
                    }
                    return msg;
                }
                catch (e) {
                    utils_1.default.logger.error(e);
                }
            });
            const reply = (content) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (typeof content === 'string')
                        content = { content };
                    content.failIfNotExists = false;
                    const del = content.delete != false;
                    const msg = yield (del ? new DeletableMessage_1.default({ send: message.reply.bind(message) }, content).start(message.member) : message.reply(content));
                    if (del) {
                        let arr = this.messageReplies.get(message.id);
                        if (!arr)
                            arr = [];
                        arr.push(msg.id);
                        this.messageReplies.set(message.id, arr);
                    }
                    return msg;
                }
                catch (e) {
                    utils_1.default.logger.error(e);
                }
            });
            const paginate = (options) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const paginator = new Paginate_1.default({ send }, options);
                    yield paginator.start({ user: message.author });
                    let arr = this.messageReplies.get(message.id);
                    if (!arr)
                        arr = [];
                    arr.push(paginator.message.id);
                    this.messageReplies.set(message.id, arr);
                    return paginator.message;
                }
                catch (e) {
                    utils_1.default.logger.error(e);
                }
            });
            const prompt = (options) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const msg = yield message.channel.send(options);
                    const reply = yield message.channel.awaitMessages({
                        max: 1,
                        time: 60000,
                        errors: ['time'],
                        filter: (m) => m.author.id === message.author.id
                    });
                    msg.delete().catch(() => { });
                    return reply.first();
                }
                catch (e) {
                    utils_1.default.logger.error(e);
                }
            });
            message.user = message.author;
            const ctx = {
                source: message,
                isCommand: false,
                send,
                reply,
                paginate,
                prompt,
                args,
                flags,
                client
            };
            yield this.checks.run(ctx, command);
            let timestamps, now, cooldownAmount;
            if (defaultChecks) {
                if (command.permissions.botOwnerOnly && !client.data.owners.includes(ctx.source.member.user.id)) {
                    const embed = this.getErrorEmbed('This is a owner only command!');
                    ctx.send({
                        embeds: [embed]
                    });
                    return next();
                }
                if (command.permissions.serverOwnerOnly && ctx.source.member.user.id !== ctx.source.guild.ownerId) {
                    const embed = this.getErrorEmbed('This is a server owner only command!');
                    ctx.send({
                        embeds: [embed]
                    });
                    return next();
                }
                if (command.permissions.clientPerms) {
                    if (!ctx.source.guild.me.permissions.has(command.permissions.clientPerms) && !ctx.source.guild.me.permissionsIn(ctx.source.channelId).has(command.permissions.clientPerms)) {
                        const embed = this.getErrorEmbed(`Sorry, but i need the following permisions to perform this command -\n${command.permissions.clientPerms.map((p) => `> \`- ${p}\``).join('\n')}`, true);
                        ctx.send({
                            embeds: [embed]
                        }).catch(() => { var _a; return (_a = ctx.source.guild.members.cache.get(ctx.source.user.id)) === null || _a === void 0 ? void 0 : _a.send({ embeds: [embed] }); });
                        return next();
                    }
                }
                if (command.permissions.userPerms) {
                    if (!ctx.source.member.permissions.has(command.permissions.userPerms) && !ctx.source.member.permissionsIn(ctx.source.channelId).has(command.permissions.userPerms)) {
                        const embed = this.getErrorEmbed(`Sorry, but you don't have enough permissions to execute this command. You need the following permissions -\n${command.permissions.userPerms.map((p) => `> \`- ${p}\``).join('\n')}`, true);
                        ctx.send({
                            embeds: [embed]
                        }).catch(() => { var _a; return (_a = ctx.source.guild.members.cache.get(ctx.source.user.id)) === null || _a === void 0 ? void 0 : _a.send({ embeds: [embed] }); });
                        return next();
                    }
                }
                if (command.config.args && !args.length && command.config.usage) {
                    const embed = this.getErrorEmbed(`You didn't provide any arguments, ${ctx.source.member}!\nThe proper usage would be: \n\`\`\`html\n${command.config.usage}\n\`\`\``, true);
                    ctx.send({
                        embeds: [embed]
                    });
                    return next();
                }
                if (command.config.nsfw && !ctx.source.channel.nsfw) {
                    const embed = this.getErrorEmbed('Sorry, i can\'t run nsfw commands on a non-nsfw channel.');
                    ctx.send({
                        embeds: [embed],
                    });
                    return next();
                }
                if (!this.cooldowns.has(command.config.name))
                    this.cooldowns.set(command.config.name, new discord_js_1.Collection());
                now = Date.now();
                timestamps = this.cooldowns.get(command.config.name);
                cooldownAmount = (command.config.cooldown || 3) * 1000;
                if (timestamps.has(ctx.source.user.id)) {
                    const expirationTime = timestamps.get(ctx.source.user.id) + cooldownAmount;
                    if (now < expirationTime && !client.data.owners.includes(ctx.source.user.id)) {
                        const timeLeft = Math.floor(expirationTime - now);
                        const embed = this.getErrorEmbed(`Please wait **${pretty_ms_1.default(timeLeft)}** before reusing the command again.`);
                        ctx.send({
                            embeds: [embed],
                        });
                        return next();
                    }
                }
            }
            try {
                const success = yield command.run(ctx);
                if (success !== false && defaultChecks) {
                    if (command.config.deleteAuthorMessage && message.deletable)
                        message.delete().catch(() => { });
                    timestamps.set(ctx.source.user.id, now);
                    setTimeout(() => timestamps.delete(ctx.source.user.id), cooldownAmount);
                }
            }
            catch (e) {
                const embed = this.getErrorEmbed(`Something went wrong executing that command\nError Message: \`${(_a = e.message) !== null && _a !== void 0 ? _a : e}\``, true);
                ctx.reply({
                    embeds: [embed],
                    allowedMentions: { repliedUser: false },
                });
                utils_1.default.logger.error(e);
            }
            return next();
        });
    }
};
