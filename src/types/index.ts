import { Message as BaseMessage, Interaction, MessagePayload, MessageOptions as DefaultMesageOption, ClientOptions as BaseClientOptions, User, InteractionReplyOptions, ApplicationCommandOptionData, ApplicationCommandPermissionData, PermissionsString, ApplicationCommand, Guild, ApplicationCommandType } from 'discord.js';
import Client from '../classes/Client';

export interface Message extends BaseMessage {
	user?: User;
}

export interface CommandContext {
	source: Message | Interaction;
	/** Only for text commands. */
	flags: Array<string>;
	/** Only for text commands. */
	args: Array<string>;
	/** Whether the command is an ApplicationCommand. */
	isApplicationCommand: boolean;
	/** Used for messages */
	language: string;
	client: Client;
	reply(Payload: MessagePayload | MessageOptions): Promise<Message | null>;
	send(Payload: MessagePayload | MessageOptions): Promise<Message | null>;
	paginate(Payload: MessagePayload | MessageOptions): Promise<Message | null>;
	prompt(Payload: MessagePayload | MessageOptions): Promise<Message>
}

export interface CommandConfig {
	name: string;
	aliases?: string[];
	/** 1 = Text Only, 2 = Both, 3 = Application Only */
	availibility?: 1 | 2 | 3;
	/** ApplicationCommandType - For ApplicationCommand only. */
	commandType?: ApplicationCommandType;
	description?: string[];
	usage?: string;
	nsfw?: boolean;
	cooldown?: number;
	args?: boolean;
	deleteAuthorMessage?: boolean;
	protected?: boolean;
	/** ApplicationCommandOptionData - For ApplicationCommand only. */
	commandOptions?: ApplicationCommandOptionData[];
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export interface CommandPermissions {
	/** Permissions for Users in order to execute the command. */
	user?: PermissionsString[];
	/** Permissions for Bot in order to execute the command. */
	client?: PermissionsString[];
	serverOwnerOnly?: boolean;
	botOwnerOnly?: boolean;
	/** Whether to enable this command by default or set using build() - For ApplicationCommand only. */
	default: boolean;
	/** Function to build command permissions - For ApplicationCommand only. */
	build?: (command: ApplicationCommand, guild: Guild) => Array<ApplicationCommandPermissionData>;
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	[key: string]: any;
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
	/** Only for paginate & deletableMessage */
	time?: number
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	flags?: any
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	files?: any
}

export interface ClientOptions extends BaseClientOptions {
	debug?: boolean;
	/** Array containing Ids of bot owners (people who can use staff commands like eval.)  */
	owners?: Array<string>;
	disableDefaultReady?: boolean;
	data?: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		[key: string]: any;
		owners?: Array<string>;
	};
}
