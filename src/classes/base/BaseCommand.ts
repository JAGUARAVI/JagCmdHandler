import { CommandContext } from '../../types';

export default class BaseCommand {
    config: {
        [key: string]: any
    }

    permissions: {
        [key: string]: any
    }

    data: {
        [key: string]: any
    }

    constructor(data: { [key: string]: any }) {
    	this.config = data.config;
    	this.permissions = data.permissions;
    	this.data = data.data;
    }

    async run(ctx: CommandContext): Promise<any> {
    	ctx.reply({
    		content: 'This command hasn\'t yet been configured!',
    		allowedMentions: { repliedUser: false }
    	});
    }
}