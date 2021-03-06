export default class Middleware {
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	middlewares: Array<(...args: Array<any>) => any | void>;

	constructor() {
		this.middlewares = [];
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	use(middleware: (...args: Array<any>) => any | void): this {
		this.middlewares.push(middleware);
		return this;
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	async run(...args: Array<any>): Promise<void> {
		for (const middleware of this.middlewares) {
			await new Promise((next) => {
				middleware(...args, next);
			});
		}
		return;
	}
}