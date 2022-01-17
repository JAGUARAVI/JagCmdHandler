import { Message as BaseMessage, Interaction, MessagePayload, MessageOptions as DefaultMesageOption, ClientOptions as BaseClientOptions, User, InteractionReplyOptions, TextBasedChannel } from 'discord.js';
import Client from '../classes/Client';

export interface Message extends BaseMessage {
	user?: User;
}

export interface CommandContext {
	source: Message | Interaction;
	flags: Array<string>;
	args: Array<string>;
	isCommand: boolean;
	client: Client;
	reply(Payload: MessagePayload | MessageOptions): Promise<Message | null>;
	send(Payload: MessagePayload | MessageOptions): Promise<Message | null>;
	paginate(Payload: MessagePayload | MessageOptions): Promise<Message | null>;
	prompt(Payload: MessagePayload | MessageOptions): Promise<Message>
}

export interface MessageOptions extends DefaultMesageOption, InteractionReplyOptions {
	delete?: boolean
	failIfNotExists?: boolean
	/** Only for paginate */
	refresh?: boolean
	/** Only for paginate */
	refreshData?: () => unknown
	/** Only for paginate */
	pageGen?: () => void
}

export interface ClientOptions extends BaseClientOptions {
	debug?: boolean;
	owners?: Array<string>;
	disableDefaultReady?: boolean;
	data?: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		[key: string]: any;
		owners?: Array<string>;
	};
}
