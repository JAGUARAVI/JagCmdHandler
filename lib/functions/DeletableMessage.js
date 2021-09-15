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
        this.id = Date.now() + Math.floor(Math.random() * 100000);
        if (typeof this.content != 'object') {
            this.content = { content: this.content };
        }
    }
    filter(interaction) {
        if (interaction.customId === `5-${this.user}-${this.id}`)
            return true;
        return false;
    }
    generateButton() {
        return new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId(`5-${this.user}-${this.id}`)
            .setStyle('DANGER')
            .setEmoji('<:trash:852511333165563915>'));
    }
    start(member) {
        return __awaiter(this, void 0, void 0, function* () {
            if (member)
                this.user = member.id;
            this.message = yield this.channel.send(Object.assign({ components: [this.generateButton()] }, { delete: false, ephemeral: false }, this.content));
            this.collector = this.message.channel.createMessageComponentCollector({ componentType: 'BUTTON', filter: this.filter.bind(this) });
            this.collector.on('collect', this._handleInteraction.bind(this));
            return this.message;
        });
    }
    _handleInteraction(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (interaction.customId !== `5-${this.user}-${this.id}`)
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
