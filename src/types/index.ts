import { Message as BaseMessage, Interaction, MessagePayload, MessageOptions as DefaultMesageOption, ClientOptions as BaseClientOptions, User, InteractionReplyOptions, TextBasedChannels } from 'discord.js';
import Client from '../classes/Client';

export interface Message extends BaseMessage {
    user?: User;
}

export interface PsuedoMessage {
    [name: string]: any;
    edit(content: DefaultMesageOption | MessagePayload): Promise<Message>;
    delete(): Promise<void>;
    channel: TextBasedChannels
}

export interface CommandContext {
    source: Message | Interaction;
    flags: Array<string>;
    args: Array<string>;
    isCommand: boolean;
    client: Client;
    reply(Payload: MessagePayload | MessageOptions): Promise<Message | PsuedoMessage | null>;
    send(Payload: MessagePayload | MessageOptions): Promise<Message | PsuedoMessage | null>;
    paginate(Payload: MessagePayload | MessageOptions): Promise<Message | PsuedoMessage | null>;
    prompt(Payload: MessagePayload | MessageOptions): Promise<Message>
}

export interface MessageOptions extends DefaultMesageOption, InteractionReplyOptions {
    delete?: boolean
    pageGen?: () => void
}

export interface ClientOptions extends BaseClientOptions {
    debug?: boolean;
    owners?: Array<string>;
    disableDefaultReady?: boolean;
    data?: {
        [key: string]: any;
        owners: Array<string>;
    };
}