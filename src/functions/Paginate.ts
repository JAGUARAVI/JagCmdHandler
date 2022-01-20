/* eslint-disable indent */
import { MessageActionRow, MessageButton, MessageEmbed, TextChannel, MessagePayload, InteractionCollector, ButtonInteraction } from 'discord.js';
import { Message, MessageOptions } from '../types';

const chunk = <T>(array: Array<T>, chunkSize = 0): Array<Array<T>> => {
	if (!Array.isArray(array)) throw new Error('First parameter must be an array');

	return array.reduce((previous, current) => {
		let chunk: Array<T>;
		if (!previous.length || previous[previous.length - 1].length === chunkSize) {
			chunk = [];
			previous.push(chunk);
		} else chunk = previous[previous.length - 1];
		chunk.push(current);
		return previous;
	}, []);
};


export = class EasyEmbedPages {
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	channel: TextChannel | any;
	content: MessageOptions | MessagePayload;
	user: string;
	message: Message;
	collector: InteractionCollector<ButtonInteraction>;

	pages: Array<MessageEmbed>;
	page: number;
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	dataPages: Array<any>;

	color?: string;
	url?: string;
	title?: string;

	author?: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		[a: string]: any;
	};
	footer?: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		[a: string]: any;
	};

	thumbnail?: string;
	image?: string;
	description?: string;
	pageGen?: (embed: MessageEmbed) => void | Promise<void>;
	refresh: boolean;
	refreshData?: () => unknown;
	ephemeral: boolean;

	time: number;
	timeout: NodeJS.Timeout;

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	constructor(channel: TextChannel | any, data: { [key: string]: any }) {
		this.channel = channel;
		this.pages = [];											  // embed pages... automagically generated xD
		this.page = 0;												  // currect page number
		this.dataPages = data.pages || [];							  // page data for extra configuration
		this.color = data.color;									  // embed color
		this.url = data.url;										  // embed url
		this.title = data.title;									  // embed title
		this.author = data.author;									  // embed author object
		this.footer = data.footer;									  // embed footer object
		this.thumbnail = data.thumbnail;							  // embed thumbnail
		this.image = data.image;									  // embed large image
		this.description = data.content || data.description;		  // the content to be presented dynamically
		this.pageGen = data.pageGen || function () { /* eslint-disable-line @typescript-eslint/no-empty-function */ }; // the function to customize embeds
		this.ephemeral = data.ephemeral || false;
		this.refresh = data.refresh || false;
		this.refreshData = data.refreshData || function () { return [{}]; };
		this.time = data.time || 300000;

		if (data.content) this.content = data.message;

		if (typeof this.content != 'object') {
			this.content = { content: this.content };
		}
	}

	filter(interaction: ButtonInteraction): boolean {
		if (interaction.customId.match(/[1-6]/)) return true;
		return false;
	}

	generateButtons(size: number, currentPage: number, disabled = false): Array<MessageActionRow> {
		const rows = [new MessageActionRow()];
		const row = rows[0];

		if (size > 2) {
			row
				.addComponents(
					new MessageButton()
						.setCustomId('1')
						.setStyle('PRIMARY')
						.setEmoji('<:rewind:852515586068185088>')
						.setDisabled(disabled ?? currentPage == 0)
				)
				.addComponents(
					new MessageButton()
						.setCustomId('2')
						.setStyle('PRIMARY')
						.setEmoji('<:previous:852515728514744340>')
						.setDisabled(disabled ?? currentPage == 0)
				)
				.addComponents(
					new MessageButton()
						.setCustomId('3')
						.setStyle('PRIMARY')
						.setEmoji('<:next:852515302231375902>')
						.setDisabled(disabled ?? currentPage == size - 1)
				)
				.addComponents(
					new MessageButton()
						.setCustomId('4')
						.setStyle('PRIMARY')
						.setEmoji('<:fastforward:852515213080395816>')
						.setDisabled(disabled ?? currentPage == size - 1)
				);
		}

		else if (size == 2) {
			row
				.addComponents(
					new MessageButton()
						.setCustomId('2')
						.setStyle('PRIMARY')
						.setEmoji('<:previous:852515728514744340>')
						.setDisabled(disabled ?? currentPage == 0)
				)
				.addComponents(
					new MessageButton()
						.setCustomId('3')
						.setStyle('PRIMARY')
						.setEmoji('<:next:852515302231375902>')
						.setDisabled(disabled ?? currentPage == 1)
				);
		}

		if (!this.ephemeral) row.addComponents(
			new MessageButton()
				.setCustomId('5')
				.setStyle('DANGER')
				.setEmoji('<:trash:852511333165563915>')
				.setDisabled(disabled)
		);

		if (this.refresh) {
			if (row.components.length >= 5) {
				rows.push(new MessageActionRow());
				rows[1].addComponents(
					new MessageButton()
						.setCustomId('6')
						.setStyle('SECONDARY')
						.setEmoji('🔄')
						.setDisabled(disabled)
				);
			}
			else row.addComponents(
				new MessageButton()
					.setCustomId('6')
					.setStyle('SECONDARY')
					.setEmoji('🔄')
					.setDisabled(disabled)
			);
		}

		return rows;
	}

	generatePages(): void {
		let text: Array<string>, great: number, array: Array<Array<string>>;

		if (this.description) {
			text = this.description.split('');
			great = text.length > 2000 ? Math.floor(text.length / 2000) : 0;
			array = great ? chunk(text, 2000) : [text];
		}

		const x = Math.max(array ? array.length : 0, this.dataPages.length);

		this.pages = [];

		for (let index = 0; index < x; index++) {
			const data: {
				// eslint-disable-next-line  @typescript-eslint/no-explicit-any
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
			if (this.dataPages[index] && this.dataPages[index].fields) this.dataPages[index].fields.map((y: { name?: string, value: string, inline: boolean }) => data.fields.push({ name: y.name || '\u200b', value: y.value || '\u200b', inline: y.inline || false }));

			const embed = new MessageEmbed(data);
			this.pageGen(embed);
			this.pages.push(embed);
		}
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async start(options?: { [key: string]: any }, page = 0): Promise<Message> {
		this.page = options.page || page;

		if (options instanceof TextChannel) options = { channel: options };
		else if (!options || typeof options !== 'object') options = {};

		if (options.user) this.user = typeof options.user == 'object' ? options.user.id : options.user;
		if (options.channel) this.channel = options.channel;
		if (options.time) this.time = options.time;

		if (!this.channel) throw new Error('No text channel specified!');

		this.generatePages();

		if (this.page > this.pages.length) {
			console.error('Page number greater than total pages!\nUsing page 0 instead.');
			this.page = 0;
		}

		this.message = await this.channel.send(this.generateMessage());

		this.collector = this.message.createMessageComponentCollector({ componentType: 'BUTTON', filter: this.filter.bind(this) });
		this.collector.on('collect', this._handleInteraction.bind(this));

		if (this.time) this.timeout = setTimeout(this.stop.bind(this), this.time);

		return this.message;
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async update(options: { [key: string]: any }, page = 0): Promise<Message> {
		this.page = options.page || page;

		if (options instanceof TextChannel) options = { channel: options };
		else if (!options || typeof options !== 'object') options = {};

		if (options.user) this.user = options.user;
		if (options.channel) this.channel = options.channel;

		if (this.page > this.pages.length) {
			console.error('Page number greater than total pages!\nUsing page 0 instead.');
			this.page = 0;
		}

		if (options.pages != undefined) this.dataPages = Array.isArray(options.pages) ? options.pages : [];
		if (options.color != undefined) this.color = options.color;
		if (options.url != undefined) this.url = options.url;
		if (options.title != undefined) this.title = options.title;
		if (options.author != undefined) this.author = options.author;
		if (options.footer != undefined) this.footer = options.footer;
		if (options.thumbnail != undefined) this.thumbnail = options.thumbnail;
		if (options.image != undefined) this.image = options.image;
		if (options.content != undefined || options.description != undefined) this.description = options.content || options.description;
		if (options.pageGen != undefined && typeof options.pageGen == 'function') this.pageGen = options.pageGen;
		if (options.ephemeral != undefined) this.ephemeral = options.ephemeral;
		if (options.refresh != undefined) this.refresh = options.refresh;

		if (options.content) this.content = options.content;

		if (typeof this.content != 'object') {
			this.content = { content: this.content };
		}

		this.generatePages();

		this.message.edit(this.generateMessage());

		return this.message;
	}

	async stop(): Promise<void> {
		if (this.collector) this.collector.stop();
		if (this.message) this.message.edit(this.generateMessage(true)).catch(() => { /* eslint-disable-line @typescript-eslint/no-empty-function */ });
	}

	generateMessage(disabled = false): MessageOptions {
		const message: MessageOptions = {
			embeds: [this.pages[this.page]],
			ephemeral: this.ephemeral,
			delete: false,
			...this.content
		};
		if (this.pages.length > 1 || !this.ephemeral) message.components = this.generateButtons(this.pages.length, this.page, disabled);

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
			case '1': {
				if (this.pages.length <= 1) break;
				if (this.page === 0) break;
				this.page = 0;
				this.message.edit(this.generateMessage());
				break;
			}
			case '2': {
				if (this.pages.length <= 1) break;
				if (this.page > 0) --this.page;
				this.message.edit(this.generateMessage());
				break;
			}
			case '3': {
				if (this.page < this.pages.length - 1) ++this.page;
				this.message.edit(this.generateMessage());
				break;
			}
			case '4': {
				if (this.pages.length <= 1) break;
				if (this.page === (this.pages.length - 1)) break;
				this.page = this.pages.length - 1;
				this.message.edit(this.generateMessage());
				break;
			}
			case '5': {
				this.message.delete().catch(() => { /* eslint-disable-line @typescript-eslint/no-empty-function */ });
				break;
			}
			case '6': {
				this.update(this.refreshData());
				break;
			}
			default:
				break;
		}

		interaction.deferUpdate();

		if (this.time) clearTimeout(this.timeout);
		this.timeout = setTimeout(this.stop.bind(this), this.time);
	}
}