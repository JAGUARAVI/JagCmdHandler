/* eslint-disable indent */
import { ActionRow, ButtonComponent, Embed, TextChannel, EmbedAuthorData, EmbedFooterData, MessagePayload, InteractionCollector, ButtonInteraction, Colors, ButtonStyle, ComponentType } from 'discord.js';
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
	/** Channel object or an object with send as a function which returns a `Message`. */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	channel: TextChannel | { send: (content: MessageOptions) => Promise<Message> };
	/** The content to be dynamically adjusted and displayed */
	content: MessageOptions | MessagePayload;
	/** UserId of person who can interact with the embed. */
	user?: string;
	/** Message object which contains the interactable embed */
	message: Message;
	/** Button collector used to collect interactions. */
	collector: InteractionCollector<ButtonInteraction>;

	/** Embed pages... Automagically generated */
	pages: Array<Embed>;
	/** Current page number. */
	page: number;
	/** Pages with embed data for extra configuration for each page. */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	dataPages: Array<any>;

	/** General embed color. (Can be specified differently for each page using `dataPages`) */
	color?: string;
	/** General embed url. (Can be specified differently for each page using `dataPages`) */
	url?: string;
	/** General embed title. (Can be specified differently for each page using `dataPages`) */
	title?: string;

	/** General author object. (Can be specified differently for each page using `dataPages`) */
	author?: EmbedAuthorData
	/** General footer object. (Can be specified differently for each page using `dataPages`) */
	footer?: EmbedFooterData

	/** General embed thumbnail. (Can be specified differently for each page using `dataPages`) */
	thumbnail?: string;
	/** General embed large image. (Can be specified differently for each page using `dataPages`) */
	image?: string;
	/** General embed description. (Can be specified differently for each page using `dataPages`) */
	description?: string;
	/** Function used to modify each embed page for better customizability. Edit the embed object provided instead of returning one. */
	pageGen?: (embed: Embed) => void | Promise<void>;
	/** Whether to display the refresh button used by users to manually refrest embed data. */
	refresh: boolean;
	/** Function called to refresh embed data when user manually requests to. Not needed if `refresh` is false. */
	refreshData?: () => unknown;
	/** Whether to send the paginate embed in an ephemeral message. (Only for application command response.) */
	ephemeral: boolean;

	/** The time after which the button collector stops (in milliseconds). */
	time: number;
	/** Used to store timeouts. */
	timeout: NodeJS.Timeout;

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	constructor(channel: TextChannel | { send: (content: MessageOptions) => Promise<Message> }, data: { [key: string]: any }) {
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
		this.pageGen = data.pageGen || function () { /* eslint-disable-line @typescript-eslint/no-empty-function */ };
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

	generateButtons(size: number, currentPage: number, disabled = false): Array<ActionRow> {
		const rows = [new ActionRow()];
		const row = rows[0];

		if (size > 2) {
			row
				.addComponents(
					new ButtonComponent()
						.setCustomId('1')
						.setStyle(ButtonStyle.Primary)
						.setEmoji({ id: '852515586068185088' })
						.setDisabled(disabled ?? currentPage == 0)
				)
				.addComponents(
					new ButtonComponent()
						.setCustomId('2')
						.setStyle(ButtonStyle.Primary)
						.setEmoji({ id: '852515728514744340' })
						.setDisabled(disabled ?? currentPage == 0)
				)
				.addComponents(
					new ButtonComponent()
						.setCustomId('3')
						.setStyle(ButtonStyle.Primary)
						.setEmoji({ id: '852515302231375902' })
						.setDisabled(disabled ?? currentPage == size - 1)
				)
				.addComponents(
					new ButtonComponent()
						.setCustomId('4')
						.setStyle(ButtonStyle.Primary)
						.setEmoji({ id: '852515213080395816' })
						.setDisabled(disabled ?? currentPage == size - 1)
				);
		}

		else if (size == 2) {
			row
				.addComponents(
					new ButtonComponent()
						.setCustomId('2')
						.setStyle(ButtonStyle.Primary)
						.setEmoji({ id: '852515728514744340' })
						.setDisabled(disabled ?? currentPage == 0)
				)
				.addComponents(
					new ButtonComponent()
						.setCustomId('3')
						.setStyle(ButtonStyle.Primary)
						.setEmoji({ id: '852515302231375902' })
						.setDisabled(disabled ?? currentPage == 1)
				);
		}

		if (!this.ephemeral) row.addComponents(
			new ButtonComponent()
				.setCustomId('5')
				.setStyle(ButtonStyle.Danger)
				.setEmoji({ id: '852511333165563915' })
				.setDisabled(disabled)
		);

		if (this.refresh) {
			if (row.components.length >= 5) {
				rows.push(new ActionRow());
				rows[1].addComponents(
					new ButtonComponent()
						.setCustomId('6')
						.setStyle(ButtonStyle.Secondary)
						.setEmoji({ name: '🔄' })
						.setDisabled(disabled)
				);
			}
			else row.addComponents(
				new ButtonComponent()
					.setCustomId('6')
					.setStyle(ButtonStyle.Secondary)
					.setEmoji({ name: '🔄' })
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

			const embed = new Embed(data);
			this.pageGen(embed);
			this.pages.push(embed);
		}
	}

	/** Sends the Paginate embed and starts the button collection. */
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
			console.error('Paginate: Page number greater than total pages! Using page 0 instead.');
			this.page = 0;
		}

		this.message = await this.channel.send(this.generateMessage());

		this.collector = this.message.createMessageComponentCollector({ componentType: ComponentType.Button, filter: this.filter.bind(this) });
		this.collector.on('collect', this._handleInteraction.bind(this));

		if (this.time) this.timeout = setTimeout(this.stop.bind(this), this.time);

		return this.message;
	}

	/** Use this to update the data of the pages. */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async update(options: { [key: string]: any }, page = 0): Promise<Message> {
		this.page = options.page || page;

		if (options instanceof TextChannel) options = { channel: options };
		else if (!options || typeof options !== 'object') options = {};

		if (options.user) this.user = typeof options.user == 'object' ? options.user.id : options.user;

		if (options.channel) this.channel = options.channel;

		if (this.page > this.pages.length) {
			console.error('Paginate: Page number greater than total pages! Using page 0 instead.');
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

	/** Stops the button collector. */
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
		if (this.user && interaction.user.id != this.user) {
			return interaction.reply({
				embeds: [
					new Embed()
						.setDescription(`Only <@${this.user}> can interact with this message.`)
						.setColor(Colors.Red)
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