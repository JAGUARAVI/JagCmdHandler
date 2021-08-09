import BaseEvent from '../classes/base/BaseEvent';
import Client from '../classes/Client';
import { Interaction } from 'discord.js';

export default class Event extends BaseEvent {
    constructor() {
        super('MessageCreate');
    }

    async run(client: Client, interaction: Interaction) {
        if(!interaction.inGuild()) return client.emit('directInteractionCreate', interaction);

        return await client.applicationCommandHandler.run(interaction);
    }
}