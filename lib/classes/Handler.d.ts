import Middleware from './base/Middleware';
import Client from './Client';
export default class CommandHandler extends Middleware {
    client: Client;
    constructor(client: Client);
    run(...args: Array<any>): Promise<void>;
}
