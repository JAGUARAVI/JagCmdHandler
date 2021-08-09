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
        for (const key in Object.keys(data)) {
            Reflect.defineProperty(this, key, {
                value: data[key],
                writable: true
            })
        }
    }

    async run(ctx: CommandContext): Promise<any> {
        ctx.reply({
            content: 'This command hasn\'t yet been configured!',
            allowedMentions: { repliedUser: false }
        });
    }
}