import BaseEvent from '../classes/base/BaseEvent';
import Client from '../classes/Client';
import { Message } from '../types';
import { ChannelType } from 'discord.js';

export = class Event extends BaseEvent {
	constructor() {
		super('messageCreate');
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async run(client: Client, message: Message): Promise<void | any> {
		if (message.partial) await message.fetch();
		if (message.channel.type === ChannelType.DM) return client.emit('directMessageCreate', message);
		if (message.webhookId) return client.emit('webhookMessage', message);
		if (!message.guild) return;
		if (!message.member || message.member.partial) await message.member?.fetch();

		return client.textCommandHandler.run(message);
	}
}