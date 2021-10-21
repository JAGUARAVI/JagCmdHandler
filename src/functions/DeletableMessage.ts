import { MessageActionRow, MessageButton, MessageEmbed, TextChannel, MessageOptions, MessagePayload, GuildMember, User, InteractionCollector, ButtonInteraction } from 'discord.js';
import { Message } from '../types';

export = class DeletableMessage {
	channel: TextChannel;
	content: MessageOptions;
	user: string;
	message: Message;
	collector: InteractionCollector<ButtonInteraction>;

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	constructor(channel: TextChannel | any, content: MessageOptions) {
		this.channel = channel;
		this.content = content;

		this.content.components = Array.isArray(this.content.components) ? this.content.components : [];

		if (typeof this.content != 'object') {
			this.content = { content: this.content };
		}
	}

	filter(interaction: ButtonInteraction): boolean {
		if (interaction.customId === '5') return true;
		return false;
	}

	generateButton(): MessageActionRow {
		return new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('5')
					.setStyle('DANGER')
					.setEmoji('<:trash:852511333165563915>')
			);
	}

	async start(member?: GuildMember | User): Promise<Message> {
		if (member) this.user = member.id;

		this.message = await this.channel.send(
			Object.assign(
				{ components: [this.content.components, this.generateButton()] },
				this.content,
				{ delete: false, ephemeral: false },
			)
		);

		this.collector = this.message.createMessageComponentCollector({ componentType: 'BUTTON', filter: this.filter.bind(this) });
		this.collector.on('collect', this._handleInteraction.bind(this));

		return this.message;
	}

	async _handleInteraction(interaction: ButtonInteraction): Promise<void> {
		if (interaction.customId !== '5') return;

		if (interaction.user.id != this.user) {
			interaction.reply({
				embeds: [
					new MessageEmbed()
						.setDescription(`Only <@${this.user}> can interact with this message.`)
						.setColor('RED')
				],
				ephemeral: true
			});
		} else {
			interaction.deferUpdate();
			this.message.delete().catch(() => { /* eslint-disable-line @typescript-eslint/no-empty-function */ });
		}
	}
}