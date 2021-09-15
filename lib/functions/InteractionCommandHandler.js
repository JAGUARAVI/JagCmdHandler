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
module.exports = class InteractionCommandHandler {
    constructor(client) {
        this.cooldowns = new discord_js_1.Collection();
        this.checks = new Middleware_1.default();
        this.client = client;
    }
    getErrorEmbed(msg, large) {
        const embed = new discord_js_1.MessageEmbed()
            .setColor('RED')
            .setDescription((!large ? ':x:  ' : '') + (msg !== null && msg !== void 0 ? msg : 'Error'));
        if (large)
            embed.setAuthor('Error', 'https://i.imgur.com/M6CN1Ft.png');
        return embed;
    }
    handle(client, interaction, next, defaultChecks = true) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!interaction.isCommand() && !interaction.isContextMenu())
                return next();
            const command = client.commands.get(interaction.commandName);
            if (!command)
                return next();
            const _reply = (content) => __awaiter(this, void 0, void 0, function* () {
                if (!content.ephemeral)
                    content.fetchReply = true;
                const replied = interaction.replied || interaction.deferred;
                const func = (replied ? interaction.editReply.bind(interaction) : interaction.reply.bind(interaction));
                const sent = yield func(content);
                if (content.ephemeral) {
                    return Object.assign(Object.assign({}, content), { edit: interaction.editReply.bind(interaction), delete: interaction.deleteReply.bind(interaction), channel: interaction.channel });
                }
                return sent;
            });
            const reply = (content) => __awaiter(this, void 0, void 0, function* () {
                const del = content.delete != false && !content.ephemeral;
                const msg = yield (del ? new DeletableMessage_1.default({ send: _reply }, content).start(interaction.member) : _reply(content));
                return msg;
            });
            const send = reply;
            const paginate = (options) => __awaiter(this, void 0, void 0, function* () {
                const paginator = new Paginate_1.default({ send: _reply }, options);
                yield paginator.start({ user: interaction.user });
                return paginator.message;
            });
            const prompt = (options) => __awaiter(this, void 0, void 0, function* () {
                var _b;
                if (!(interaction.replied || interaction.deferred))
                    yield interaction.deferReply();
                const msg = yield interaction.followUp(options);
                const reply = yield interaction.channel.awaitMessages({
                    max: 1,
                    time: 60000,
                    errors: ['time'],
                    filter: (m) => m.author.id === interaction.user.id
                });
                (_b = msg.delete) === null || _b === void 0 ? void 0 : _b.call(msg).catch(() => { });
                return reply.first();
            });
            const ctx = {
                source: interaction,
                isCommand: true,
                send,
                reply,
                paginate,
                prompt,
                args: [],
                flags: [],
                client
            };
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
            yield this.checks.run(ctx, command);
            try {
                const success = yield command.run(ctx);
                if (success !== false && defaultChecks) {
                    timestamps.set(ctx.source.user.id, now);
                    setTimeout(() => timestamps.delete(ctx.source.user.id), cooldownAmount);
                }
            }
            catch (e) {
                const embed = this.getErrorEmbed(`Something went wrong executing that command\nError Message: \`${(_a = e.message) !== null && _a !== void 0 ? _a : e}\``, true);
                ctx.reply({
                    embeds: [embed],
                    allowedMentions: { repliedUser: false },
                    ephemeral: true
                });
                utils_1.default.logger.error(e);
            }
            return next();
        });
    }
};
