import Client from '../Client';
export default class BaseEvent {
    name: string;
    constructor(eventName: string);
    run(client: Client, ...data: Array<any>): Promise<any>;
}
