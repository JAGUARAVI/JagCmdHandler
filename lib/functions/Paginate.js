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
const chunk = (array, chunkSize = 0) => {
    if (!Array.isArray(array))
        throw new Error('First parameter must be an array');
    return array.reduce((previous, current) => {
        let chunk;
        if (!previous.length || previous[previous.length - 1].length === chunkSize) {
            chunk = [];
            previous.push(chunk);
        }
        else
            chunk = previous[previous.length - 1];
        chunk.push(current);
        return previous;
    }, []);
};
module.exports = class EasyEmbedPages {
    constructor(channel, data) {
        this.channel = channel;
        this.pages = [];
        this.page = 0;
        this.dataPages = data.pages || [];
        this.color = data.color;
        this.url = data.url;
        this.title = data.title;
        this.author = data.author;
        this.footer = data.footer;
        this.thumbnail = data.thumbnail;
        this.image = data.image;
        this.description = data.content || data.description;
        this.pageGen = data.pageGen || function () { };
        this.ephemeral = data.ephemeral || false;
        if (typeof this.content != 'object') {
            this.content = { content: this.content };
        }
    }
    filter(interaction) {
        if (interaction.customId.match(new RegExp('[1-5]')))
            return true;
        return false;
    }
    generateButtons(size, currentPage) {
        const row = new discord_js_1.MessageActionRow();
        if (size > 2) {
            row
                .addComponents(new discord_js_1.MessageButton()
                .setCustomId('1')
                .setStyle('PRIMARY')
                .setEmoji('<:rewind:852515586068185088>')
                .setDisabled(currentPage == 0))
                .addComponents(new discord_js_1.MessageButton()
                .setCustomId('2')
                .setStyle('PRIMARY')
                .setEmoji('<:previous:852515728514744340>')
                .setDisabled(currentPage == 0))
                .addComponents(new discord_js_1.MessageButton()
                .setCustomId('3')
                .setStyle('PRIMARY')
                .setEmoji('<:next:852515302231375902>')
                .setDisabled(currentPage == size - 1))
                .addComponents(new discord_js_1.MessageButton()
                .setCustomId('4')
                .setStyle('PRIMARY')
                .setEmoji('<:fastforward:852515213080395816>')
                .setDisabled(currentPage == size - 1));
        }
        else if (size == 2) {
            row
                .addComponents(new discord_js_1.MessageButton()
                .setCustomId('2')
                .setStyle('PRIMARY')
                .setEmoji('<:previous:852515728514744340>')
                .setDisabled(currentPage == 0))
                .addComponents(new discord_js_1.MessageButton()
                .setCustomId('3')
                .setStyle('PRIMARY')
                .setEmoji('<:next:852515302231375902>')
                .setDisabled(currentPage == 1));
        }
        if (!this.ephemeral)
            row.addComponents(new discord_js_1.MessageButton()
                .setCustomId('5')
                .setStyle('DANGER')
                .setEmoji('<:trash:852511333165563915>'));
        return row;
    }
    generatePages() {
        let text, great, array;
        if (this.description) {
            text = this.description.split('');
            great = text.length > 2000 ? Math.floor(text.length / 2000) : 0;
            array = great ? chunk(text, 2000) : [text];
        }
        const x = Math.max(array ? array.length : 0, this.dataPages.length);
        this.pages = [];
        for (let index = 0; index < x; index++) {
            const data = {
                fields: []
            };
            if (this.description && array[index]) {
                let i = array[index].join('');
                if (index < great)
                    i = `${i}...`;
                else if (index)
                    i = `...${i}`;
                data.description = i;
                if (this.dataPages[index] && (this.dataPages[index].description || this.dataPages[index].content))
                    data.fields.push({ name: '‎\u200b', value: this.dataPages[index].description || this.dataPages[index].content, inline: false });
            }
            else {
                if (this.dataPages[index] && (this.dataPages[index].description || this.dataPages[index].content))
                    data.description = this.dataPages[index].description || this.dataPages[index].content;
            }
            if ((this.dataPages[index] && this.dataPages[index].color) || this.color)
                data.color = this.dataPages[index] && this.dataPages[index].color || this.color;
            if ((this.dataPages[index] && this.dataPages[index].url) || this.url)
                data.url = this.dataPages[index] && this.dataPages[index].url || this.url;
            if ((this.dataPages[index] && this.dataPages[index].title) || this.title)
                data.title = this.dataPages[index] && this.dataPages[index].title || this.title;
            if ((this.dataPages[index] && this.dataPages[index].author) || this.author)
                data.author = this.dataPages[index] && this.dataPages[index].author || this.author;
            if ((this.dataPages[index] && this.dataPages[index].footer) || this.footer)
                data.footer = this.dataPages[index] && this.dataPages[index].footer || this.footer;
            else
                data.footer = { text: `Page ${index + 1} of ${x} page${x > 1 ? 's' : ''}` };
            if ((this.dataPages[index] && this.dataPages[index].thumbnail) || this.thumbnail)
                data.thumbnail = this.dataPages[index] && this.dataPages[index].thumbnail || this.thumbnail;
            if ((this.dataPages[index] && this.dataPages[index].image) || this.image)
                data.image = this.dataPages[index] && this.dataPages[index].image || this.image;
            if (this.dataPages[index] && this.dataPages[index].fields)
                this.dataPages[index].fields.map((y) => data.fields.push({ name: y.name || '\u200b', value: y.value || '\u200b', inline: y.inline || false }));
            const embed = new discord_js_1.MessageEmbed(data);
            this.pageGen(embed);
            this.pages.push(embed);
        }
    }
    start(options, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            this.page = page;
            if (options instanceof discord_js_1.TextChannel)
                options = { channel: options };
            else if (!options || typeof options !== 'object')
                options = {};
            if (options.user)
                this.user = options.user;
            if (options.channel)
                this.channel = options.channel;
            if (!this.channel)
                throw new Error('No text channel specified!');
            this.generatePages();
            if (this.page > this.pages.length)
                throw new Error('Page number greater than total pages!');
            this.message = yield this.channel.send(this.generateMessage());
            this.collector = this.message.createMessageComponentCollector({ componentType: 'BUTTON', filter: this.filter.bind(this) });
            this.collector.on('collect', this._handleInteraction.bind(this));
            return this.message;
        });
    }
    generateMessage() {
        const message = {
            embeds: [this.pages[this.page]],
            ephemeral: this.ephemeral,
            delete: false
        };
        if (this.pages.length > 1 || !this.ephemeral)
            message.components = [this.generateButtons(this.pages.length, this.page)];
        return message;
    }
    _handleInteraction(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (interaction.user.id != this.user) {
                return interaction.reply({
                    embeds: [
                        new discord_js_1.MessageEmbed()
                            .setDescription(`Only <@${this.user}> can interact with this message.`)
                            .setColor('RED')
                    ],
                    ephemeral: true
                });
            }
            switch (interaction.customId) {
                case '1': {
                    if (this.pages.length <= 1)
                        break;
                    if (this.page === 0)
                        break;
                    this.page = 0;
                    this.message.edit(this.generateMessage());
                    break;
                }
                case '2': {
                    if (this.pages.length <= 1)
                        break;
                    if (this.page > 0)
                        --this.page;
                    this.message.edit(this.generateMessage());
                    break;
                }
                case '3': {
                    if (this.page < this.pages.length - 1)
                        ++this.page;
                    this.message.edit(this.generateMessage());
                    break;
                }
                case '4': {
                    if (this.pages.length <= 1)
                        break;
                    if (this.page === (this.pages.length - 1))
                        break;
                    this.page = this.pages.length - 1;
                    this.message.edit(this.generateMessage());
                    break;
                }
                case '5': {
                    this.message.delete().catch(() => { });
                    break;
                }
                default:
                    break;
            }
            interaction.deferUpdate();
        });
    }
};
