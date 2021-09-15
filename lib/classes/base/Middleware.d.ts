export default class Middleware {
    middlewares: Array<(...args: Array<any>) => any | void>;
    constructor();
    use(middleware: (...args: Array<any>) => any | void): this;
    run(...args: Array<any>): Promise<void>;
}
