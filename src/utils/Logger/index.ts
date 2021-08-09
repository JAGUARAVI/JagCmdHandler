import moment from 'moment';
import chalk from 'chalk';

const timestamp = () => moment().format('YYYY-MM-DD HH:MM:ss');
const parse = (t: any) => typeof t !== 'string' ? `\n${require('util').inspect(t)}` : t;

const info = (text: any, str = 'Server') => {
    console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgWhite('[INFO]') + ' : ' + chalk.hex('#03a1fc')(parse(text)));
}
const success = (text: any, str = 'Server') => {
    console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgHex('#00b527')('[SUCCESS]') + ' : ' + chalk.hex('#00ff6e')(parse(text)));
}
const warn = (text: any, str = 'Server') => {
    console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgHex('#eeff00')('[WARNING]') + ' : ' + chalk.hex('#eeff00')(parse(text)));
}
const error = (text: any, str = 'Server') => {
    console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgHex('#ff0000')('[ERROR]') + ' : ' + chalk.hex('#ff0000')(parse(text)));
}
const debug = (text: any, str = 'Server') => {
    console.log(chalk.cyan(timestamp() + ' ' + str) + ' ' + chalk.black.bgHex('#eeff00')('[DEBUG]') + ' : ' + chalk.white(parse(text)));
}


export = { info, success, warn, error, debug };
