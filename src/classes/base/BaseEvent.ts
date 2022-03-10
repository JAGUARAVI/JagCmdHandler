import Client from '../Client';

export default class BaseEvent {
	public name: string;

	/** Name of the event for which the body is executed when emitted. */
	constructor(eventName: string) {
		this.name = eventName;
	}

	/** Event body which gets executed. */
	async run(client: Client, ...data: Array<any>): Promise<any> { /* eslint-disable-line @typescript-eslint/no-empty-function */ /* eslint-disable-line  @typescript-eslint/no-explicit-any */ /* eslint-disable-line @typescript-eslint/no-unused-vars */ }
}