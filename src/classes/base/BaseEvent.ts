import Client from '../Client';

export default class BaseEvent {
    public name: string

    constructor(eventName: string) {
        this.name = eventName;
    }

    async run(client: Client, ...data: any): Promise<any> {

    }
}