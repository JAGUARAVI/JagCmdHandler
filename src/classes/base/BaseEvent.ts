import Client from '../Client';

export default class BaseEvent {
	public name: string;

	constructor(eventName: string) {
		this.name = eventName;
	}

	async run(client: Client, ...data: Array<any>): Promise<any> { /* eslint-disable-line @typescript-eslint/no-empty-function */ /* eslint-disable-line  @typescript-eslint/no-explicit-any */ /* eslint-disable-line @typescript-eslint/no-unused-vars */ }
}