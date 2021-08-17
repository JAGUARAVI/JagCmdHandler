import BaseEvent from '../classes/base/BaseEvent';
import Client from '../classes/Client';
import { Interaction } from 'discord.js';

export = class Event extends BaseEvent {
	constructor() {
		super('interactionCreate');
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async run(client: Client, interaction: Interaction): Promise<void | any> {
		if(!interaction.inGuild()) return client.emit('directInteractionCreate', interaction);

		return client.applicationCommandHandler.run(interaction);
	}
}