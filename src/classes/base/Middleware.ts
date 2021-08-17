export default class Middleware {
    middlewares: Array<(...args: any) => any | void>

    constructor() {
    	this.middlewares = [];
    }

    use(middleware: (...args: any) => any | void): this {
    	this.middlewares.push(middleware);
    	return this;
    }

    async run(...args: any): Promise<void> {
    	for (const middleware of this.middlewares) {
    		await new Promise(async (next) => {
    			await middleware(...args, next);
    		});
    	}
    	return;
    }
}