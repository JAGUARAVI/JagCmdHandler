import Client from '../classes/Client';
import { Message } from '../types';
declare const _default: {
    new (): {
        run(client: Client, message: Message): Promise<void | any>;
        name: string;
    };
};
export = _default;
