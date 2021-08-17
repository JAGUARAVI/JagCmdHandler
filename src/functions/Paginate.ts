import { MessageActionRow, MessageButton, MessageEmbed, TextChannel, MessagePayload, InteractionCollector, ButtonInteraction } from 'discord.js';
import { PsuedoMessage, Message, MessageOptions } from '../types';

const chunk = (array: Array<any>, chunkSize = 0): Array<Array<any>> => {
    if (!Array.isArray(array)) throw new Error('First parameter must be an array');

    return array.reduce((previous, current) => {
        let chunk: Array<any>;
        if (!previous.length || previous[previous.length - 1].length === chunkSize) {
            chunk = [];
            previous.push(chunk);
        } else chunk = previous[previous.length - 1];
        chunk.push(current);
        return previous;
    }, []);
}


export = class EasyEmbedPages {
    channel: TextChannel | any;
    content: MessageOptions | MessagePayload;
    user: string;
    message: Message | PsuedoMessage;
    collector: InteractionCollector<ButtonInteraction>;

    pages: Array<MessageEmbed>;
    page: number;
    dataPages: Array<any>;

    color?: string;
    url?: string;
    title?: string;

    author?: {
        [a: string]: any;
    };
    footer?: {
        [a: string]: any;
    };

    thumbnail?: string;
    image?: string;
    description?: string;
    pageGen?: (embed: MessageEmbed) => void | Promise<void>;
    ephemeral: boolean;

    id: number;

    constructor(channel: TextChannel | any, data: { [key: string]: any }) {
        this.channel = channel;
        this.pages = [];                                              // embed pages... automagically generated xD
        this.page = 0;                                                // currect page number
        this.dataPages = data.pages || [];                            // page data for extra configuration
        this.color = data.color;                                      // embed color
        this.url = data.url;                                          // embed url
        this.title = data.title;                                      // embed title
        this.author = data.author;                                    // embed author object
        this.footer = data.footer;                                    // embed footer object
        this.thumbnail = data.thumbnail;                              // embed thumbnail
        this.image = data.image;                                      // embed large image
        this.description = data.content || data.description;          // the content to be presented dynamically
        this.pageGen = data.pageGen || function () { };               // the function to customize embeds
        this.ephemeral = data.ephemeral || false;

        this.id = Date.now() + Math.floor(Math.random() * 100000);

        if (typeof this.content != 'object') {
            this.content = { content: this.content };
        }
    }

    filter(interaction: ButtonInteraction): boolean {
        if (interaction.customId.match(new RegExp(`[1-5]\-${this.user}\-${this.id}`))) return true;
        return false;
    }

    generateButtons(size: number, currentPage: number): MessageActionRow {
        const row = new MessageActionRow();

        if (size > 2) {
            row
                .addComponents(
                    new MessageButton()
                        .setCustomId(`1-${this.user}-${this.id}`)
                        .setStyle('PRIMARY')
                        .setEmoji('<:rewind:852515586068185088>')
                        .setDisabled(currentPage == 0)
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId(`2-${this.user}-${this.id}`)
                        .setStyle('PRIMARY')
                        .setEmoji('<:previous:852515728514744340>')
                        .setDisabled(currentPage == 0)
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId(`3-${this.user}-${this.id}`)
                        .setStyle('PRIMARY')
                        .setEmoji('<:next:852515302231375902>')
                        .setDisabled(currentPage == size - 1)
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId(`4-${this.user}-${this.id}`)
                        .setStyle('PRIMARY')
                        .setEmoji('<:fastforward:852515213080395816>')
                        .setDisabled(currentPage == size - 1)
                )
        }

        else if (size == 2) {
            row
                .addComponents(
                    new MessageButton()
                        .setCustomId(`2-${this.user}-${this.id}`)
                        .setStyle('PRIMARY')
                        .setEmoji('<:previous:852515728514744340>')
                        .setDisabled(currentPage == 0)
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId(`3-${this.user}-${this.id}`)
                        .setStyle('PRIMARY')
                        .setEmoji('<:next:852515302231375902>')
                        .setDisabled(currentPage == 1)
                );
        }

        row.addComponents(
            new MessageButton()
                .setCustomId(`5-${this.user}-${this.id}`)
                .setStyle('DANGER')
                .setEmoji('<:trash:852511333165563915>')
        );

        return row;
    }

    generatePages() {
        let text: Array<string>, great: number, array: Array<Array<string>>;

        if (this.description) {
            text = this.description.split('');
            great = text.length > 2000 ? Math.floor(text.length / 2000) : 0;
            array = great ? chunk(text, 2000) : [text];
        }

        let x = Math.max(array ? array.length : 0, this.dataPages.length);

        this.pages = [];

        for (let index = 0; index < x; index++) {
            const data: {
                [key: string]: any
            } = {
                fields: []
            };

            if (this.description && array[index]) {
                let i = array[index].join('');
                if (index < great) i = `${i}...`;
                else if (index) i = `...${i}`;
                data.description = i;

                if (this.dataPages[index] && (this.dataPages[index].description || this.dataPages[index].content)) data.fields.push({ name: '‎\u200b', value: this.dataPages[index].description || this.dataPages[index].content, inline: false });
            }
            else {
                if (this.dataPages[index] && (this.dataPages[index].description || this.dataPages[index].content)) data.description = this.dataPages[index].description || this.dataPages[index].content;
            }

            if ((this.dataPages[index] && this.dataPages[index].color) || this.color) data.color = this.dataPages[index] && this.dataPages[index].color || this.color;
            if ((this.dataPages[index] && this.dataPages[index].url) || this.url) data.url = this.dataPages[index] && this.dataPages[index].url || this.url;
            if ((this.dataPages[index] && this.dataPages[index].title) || this.title) data.title = this.dataPages[index] && this.dataPages[index].title || this.title;
            if ((this.dataPages[index] && this.dataPages[index].author) || this.author) data.author = this.dataPages[index] && this.dataPages[index].author || this.author;
            if ((this.dataPages[index] && this.dataPages[index].footer) || this.footer) data.footer = this.dataPages[index] && this.dataPages[index].footer || this.footer;
            else data.footer = { text: `Page ${index + 1} of ${x} page${x > 1 ? 's' : ''}` };

            if ((this.dataPages[index] && this.dataPages[index].thumbnail) || this.thumbnail) data.thumbnail = this.dataPages[index] && this.dataPages[index].thumbnail || this.thumbnail;
            if ((this.dataPages[index] && this.dataPages[index].image) || this.image) data.image = this.dataPages[index] && this.dataPages[index].image || this.image;
            if (this.dataPages[index] && this.dataPages[index].fields) this.dataPages[index].fields.map((x: { name?: string, value: string, inline: boolean }) => data.fields.push({ name: x.name || '\u200b', value: x.value || '\u200b', inline: x.inline || false }));

            const embed = new MessageEmbed(data);
            this.pageGen(embed);
            this.pages.push(embed);
        };
    }

    async start(options?: any, page = 0): Promise<Message | PsuedoMessage> {
        this.page = page;

        if (options instanceof TextChannel) options = { channel: options };
        else if (!options || typeof options !== 'object') options = {};

        if (options.user) this.user = options.user;
        if (options.channel) this.channel = options.channel;

        if (!this.channel) throw new Error('No text channel specified!');

        this.generatePages();

        if (this.page > this.pages.length) throw new Error('Page number greater than total pages!');

        this.message = await this.channel.send(this.generateMessage());

        this.collector = this.message.channel.createMessageComponentCollector({ componentType: 'BUTTON', filter: this.filter.bind(this) });
        this.collector.on('collect', this._handleInteraction.bind(this));

        return this.message;
    }

    generateMessage(): MessageOptions {
        const message: MessageOptions = {
            embeds: [this.pages[this.page]],
            ephemeral: this.ephemeral,
            delete: false
        }
        if (this.pages.length > 1 || !this.ephemeral) message.components = [this.generateButtons(this.pages.length, this.page)];

        return message;
    }

    async _handleInteraction(interaction: ButtonInteraction): Promise<void> {
        if (interaction.user.id != this.user) {
            return interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`Only <@${this.user}> can interact with this message.`)
                        .setColor('RED')
                ],
                ephemeral: true
            });
        }

        switch (interaction.customId) {
            case `1-${this.user}-${this.id}`: {
                if (this.pages.length <= 1) break;
                if (this.page === 0) break;
                this.page = 0;

                this.message.edit(this.generateMessage());

                break;
            }
            case `2-${this.user}-${this.id}`: {
                if (this.pages.length <= 1) break;
                if (this.page > 0) --this.page;

                this.message.edit(this.generateMessage());

                break;
            }
            case `3-${this.user}-${this.id}`: {
                if (this.page < this.pages.length - 1) ++this.page;

                this.message.edit(this.generateMessage());

                break;
            }
            case `4-${this.user}-${this.id}`: {
                if (this.pages.length <= 1) break;
                if (this.page === (this.pages.length - 1)) break;
                this.page = this.pages.length - 1;
                
                this.message.edit(this.generateMessage());
                
                break;
            }
            case `5-${this.user}-${this.id}`: {
                this.message.delete().catch(() => { })
                break;
            }
            default:
                break;
        }

        interaction.deferUpdate();
    }
}