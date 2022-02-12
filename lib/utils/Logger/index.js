"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const moment_1 = __importDefault(require("moment"));
const chalk_1 = __importDefault(require("chalk"));
const util_1 = require("util");
const timestamp = () => moment_1.default().format('YYYY-MM-DD HH:MM:ss');
const parse = (t) => typeof t !== 'string' ? `\n${util_1.inspect(t)}` : t;
const info = (text, str = 'Server') => {
    console.log(chalk_1.default.cyan(timestamp() + ' ' + str) + ' ' + chalk_1.default.black.bgWhite('[INFO]') + ' : ' + chalk_1.default.hex('#03a1fc')(parse(text)));
};
const success = (text, str = 'Server') => {
    console.log(chalk_1.default.cyan(timestamp() + ' ' + str) + ' ' + chalk_1.default.black.bgHex('#00b527')('[SUCCESS]') + ' : ' + chalk_1.default.hex('#00ff6e')(parse(text)));
};
const warn = (text, str = 'Server') => {
    console.log(chalk_1.default.cyan(timestamp() + ' ' + str) + ' ' + chalk_1.default.black.bgHex('#eeff00')('[WARNING]') + ' : ' + chalk_1.default.hex('#eeff00')(parse(text)));
};
const error = (text, str = 'Server') => {
    console.log(chalk_1.default.cyan(timestamp() + ' ' + str) + ' ' + chalk_1.default.black.bgHex('#ff0000')('[ERROR]') + ' : ' + chalk_1.default.hex('#ff0000')(parse(text)));
};
const debug = (text, str = 'Server') => {
    console.log(chalk_1.default.cyan(timestamp() + ' ' + str) + ' ' + chalk_1.default.black.bgHex('#eeff00')('[DEBUG]') + ' : ' + chalk_1.default.white(parse(text)));
};
module.exports = { info, success, warn, error, debug };
