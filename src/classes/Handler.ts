import Middleware from './base/Middleware';
import Client from './Client';

export default class CommandHandler extends Middleware {
    client: Client;

    constructor(client: Client){
    	super();
    	this.client = client;
    }

    async run(...args: any) {
    	super.run(this.client, ...args);
    }
}