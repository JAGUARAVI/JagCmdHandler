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
const discord_js_1 = require("discord.js");
module.exports = class DeletableMessage {
    constructor(channel, content) {
        this.channel = channel;
        this.content = content;
        this.time = content.time || 300000;
        this.content.components = Array.isArray(this.content.components) ? this.content.components : [];
        if (typeof this.content != 'object') {
            this.content = { content: this.content };
        }
    }
    filter(interaction) {
        if (interaction.customId === '5')
            return true;
        return false;
    }
    generateButton(disabled = false) {
        return new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId('5')
            .setStyle('DANGER')
            .setEmoji('<:trash:852511333165563915>')
            .setDisabled(disabled));
    }
    start(member) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (member)
                this.user = member.id;
            this.message = yield this.channel.send(Object.assign(this.content, { components: [...(((_a = this.content.components) === null || _a === void 0 ? void 0 : _a.length) ? this.content.components : []), this.generateButton()] }, { delete: false, ephemeral: false }));
            this.collector = this.message.createMessageComponentCollector({ componentType: 'BUTTON', filter: this.filter.bind(this) });
            this.collector.on('collect', this._handleInteraction.bind(this));
            if (this.time)
                setTimeout(this.stop.bind(this), this.time);
            return this.message;
        });
    }
    stop() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.collector)
                this.collector.stop();
            if (this.message)
                this.message.edit(Object.assign({ components: [...((_a = this.content.components) !== null && _a !== void 0 ? _a : []), this.generateButton(true)] }, this.content, { delete: false, ephemeral: false })).catch(() => { });
        });
    }
    _handleInteraction(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (interaction.customId !== '5')
                return;
            if (interaction.user.id != this.user) {
                interaction.reply({
                    embeds: [
                        new discord_js_1.MessageEmbed()
                            .setDescription(`Only <@${this.user}> can interact with this message.`)
                            .setColor('RED')
                    ],
                    ephemeral: true
                });
            }
            else {
                interaction.deferUpdate();
                this.message.delete().catch(() => { });
            }
        });
    }
};
