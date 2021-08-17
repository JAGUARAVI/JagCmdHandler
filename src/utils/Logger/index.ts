import moment from 'moment';
import chalk from 'chalk';
import { inspect } from 'util';

const timestamp = () => moment().format('YYYY-MM-DD HH:MM:ss');
const parse = (t: any) => typeof t !== 'string' ? `\n${inspect(t)}` : t; // eslint-disable-line  @typescript-eslint/no-explicit-any

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const info = (text: any, str = 'Server'): void => { // eslint-disable-line  @typescript-eslint/explicit-module-boundary-types
	console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgWhite('[INFO]') + ' : ' + chalk.hex('#03a1fc')(parse(text)));
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const success = (text: any, str = 'Server'): void => { // eslint-disable-line  @typescript-eslint/explicit-module-boundary-types
	console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgHex('#00b527')('[SUCCESS]') + ' : ' + chalk.hex('#00ff6e')(parse(text)));
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const warn = (text: any, str = 'Server'): void => { // eslint-disable-line  @typescript-eslint/explicit-module-boundary-types
	console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgHex('#eeff00')('[WARNING]') + ' : ' + chalk.hex('#eeff00')(parse(text)));
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const error = (text: any, str = 'Server'): void => { // eslint-disable-line  @typescript-eslint/explicit-module-boundary-types
	console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgHex('#ff0000')('[ERROR]') + ' : ' + chalk.hex('#ff0000')(parse(text)));
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const debug = (text: any, str = 'Server'): void => { // eslint-disable-line  @typescript-eslint/explicit-module-boundary-types
	console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgHex('#eeff00')('[DEBUG]') + ' : ' + chalk.white(parse(text)));
};

export = { info, success, warn, error, debug };
