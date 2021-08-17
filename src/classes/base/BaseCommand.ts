import { CommandContext } from '../../types';

export default class BaseCommand {
	config: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		[key: string]: any
	}

	permissions: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		[key: string]: any
	}

	data: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		[key: string]: any
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	constructor(data: { [key: string]: any }) {
		this.config = data.config;
		this.permissions = data.permissions;
		this.data = data.data;
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async run(ctx: CommandContext): Promise<any> {
		ctx.reply({
			content: 'This command hasn\'t yet been configured!',
			allowedMentions: { repliedUser: false }
		});
	}
}