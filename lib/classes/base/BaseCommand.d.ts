import { CommandContext } from '../../types';
export default class BaseCommand {
    config: {
        [key: string]: any;
    };
    permissions: {
        [key: string]: any;
    };
    data: {
        [key: string]: any;
    };
    constructor(data: {
        [key: string]: any;
    });
    run(ctx: CommandContext): Promise<any>;
}
