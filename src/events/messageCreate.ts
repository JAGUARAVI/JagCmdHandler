import BaseEvent from '../classes/base/BaseEvent';
import Client from '../classes/Client';
import { Message } from '../types';

export = class Event extends BaseEvent {
	constructor() {
		super('messageCreate');
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async run(client: Client, message: Message): Promise<void | any> {
		if (message.partial) await message.fetch();
		if (message.channel.type === 'DM') return client.emit('directMessageCreate', message);
		if (message.webhookId) return client.emit('webhookMessage', message);
		if (!message.guild) return;
		if (!message.member || message.member.partial) await message.member?.fetch();

		return await client.textCommandHandler.run(message);
	}
}