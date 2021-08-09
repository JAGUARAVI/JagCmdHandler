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

    async run(ctx: CommandContext): Promise<any> {
        ctx.reply({
            content: 'This command hasn\'t yet been configured!',
            allowedMentions: { repliedUser: false }
        });
    }
}