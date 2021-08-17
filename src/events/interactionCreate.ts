import BaseEvent from '../classes/base/BaseEvent';
import Client from '../classes/Client';
import { Interaction } from 'discord.js';

export = class Event extends BaseEvent {
	constructor() {
		super('interactionCreate');
	}

	async run(client: Client, interaction: Interaction) {
		if(!interaction.inGuild()) return client.emit('directInteractionCreate', interaction);

		return await client.applicationCommandHandler.run(interaction);
	}
}