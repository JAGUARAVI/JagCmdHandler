import Middleware from './base/Middleware';
import Client from './Client';

export default class CommandHandler extends Middleware {
	client: Client;

	constructor(client: Client){
		super();
		this.client = client;
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async run(...args: Array<any>): Promise<void> {
		super.run(this.client, ...args);
	}
}