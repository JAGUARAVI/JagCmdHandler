"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const path_1 = require("path");
const util_1 = require("util");
const BaseCommand_1 = __importDefault(require("./base/BaseCommand"));
const BaseEvent_1 = __importDefault(require("./base/BaseEvent"));
const utils_1 = __importDefault(require("../utils"));
const Handler_1 = __importDefault(require("./Handler"));
const Resolve_1 = __importDefault(require("./Resolve"));
const defaultOptions = {
    partials: ['USER', 'GUILD_MEMBER', 'MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
    ],
    makeCache: discord_js_1.Options.cacheWithLimits({
        MessageManager: {
            maxSize: 100,
            sweepInterval: 30
        }
    })
};
class Client extends discord_js_1.Client {
    constructor(options) {
        var _a;
        super(Object.assign({}, defaultOptions, options));
        this.utils = utils_1.default;
        this.log = utils_1.default.logger;
        this.events = new discord_js_1.Collection();
        this.commands = new discord_js_1.Collection();
        this.applicationCommands = new discord_js_1.Collection();
        this.textCommandHandler = new Handler_1.default(this);
        this.applicationCommandHandler = new Handler_1.default(this);
        this.resolve = new Resolve_1.default(this);
        this.debug = options.debug ? true : false;
        this.data = Object.assign({}, options === null || options === void 0 ? void 0 : options.data, { owners: Array.from(((_a = options === null || options === void 0 ? void 0 : options.data) === null || _a === void 0 ? void 0 : _a.owners) || (options === null || options === void 0 ? void 0 : options.owners) || []) });
        if (!options.disableDefaultReady)
            this.on('ready', () => {
                this.log.success(`${this.user.tag} ready!`);
            });
    }
    registerCommand(dir, category) {
        try {
            const Command = require(dir);
            if (Command.prototype instanceof BaseCommand_1.default) {
                const props = new Command();
                props.config.category = category;
                this.commands.set(props.config.name, props);
                if (this.debug)
                    this.log.debug(`Loaded Command - ${props.config.name}`);
            }
            return false;
        }
        catch (e) {
            return `Unable to load command ${dir}:\n${util_1.inspect(e)}`;
        }
    }
    registerCommands(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield fs_1.promises.readdir(dir);
            for (const file of files) {
                const filesPath = path_1.join(dir, file);
                const commands = yield fs_1.promises.readdir(filesPath);
                for (const command of commands) {
                    if (command.endsWith('.js')) {
                        const response = this.registerCommand(path_1.join(filesPath, command), file);
                        if (response)
                            this.log.error(response);
                    }
                }
            }
        });
    }
    registerApplicationCommands(guild) {
        return __awaiter(this, void 0, void 0, function* () {
            const target = guild !== null && guild !== void 0 ? guild : this.application;
            return Promise.all(this.commands.filter(cmd => cmd.config.commandType != 1).map((command) => {
                return {
                    name: command.config.name,
                    description: ['MESSAGE', 3, 'USER', 2].includes(command.config.applicationType) ? null : command.config.description,
                    options: command.config.commandOptions,
                    defaultPermission: command.permissions.default != false,
                    type: command.config.applicationType || 1,
                };
            })).then((data) => __awaiter(this, void 0, void 0, function* () {
                return target === null || target === void 0 ? void 0 : target.commands.set(data).then((result) => __awaiter(this, void 0, void 0, function* () {
                    if (target != this.application)
                        yield Promise.all(result.map((command) => __awaiter(this, void 0, void 0, function* () {
                            var _a;
                            const cmd = this.commands.get(command.name);
                            if (typeof ((_a = cmd === null || cmd === void 0 ? void 0 : cmd.permissions) === null || _a === void 0 ? void 0 : _a.build) === 'function')
                                yield command.permissions.add({ guild: target, permissions: cmd.permissions.build(target, command) });
                        })));
                    this.applicationCommands.set(guild ? guild.id : '0', result);
                    return result;
                }));
            }));
        });
    }
    unregisterApplicationCommands(guild) {
        return __awaiter(this, void 0, void 0, function* () {
            const target = guild !== null && guild !== void 0 ? guild : this.application;
            this.applicationCommands.delete(guild ? guild.id : '0');
            return target.commands.set([]);
        });
    }
    registerEvents(dir, target) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const defaultTarget = target == undefined;
            if (!target)
                target = this;
            const files = yield fs_1.promises.readdir(dir);
            for (const file of files) {
                if (file.endsWith('.js')) {
                    const Event = require(path_1.join(dir, file));
                    if (Event.prototype instanceof BaseEvent_1.default) {
                        const instance = new Event();
                        instance.run = instance.run.bind(instance, this);
                        (_a = target.on) === null || _a === void 0 ? void 0 : _a.call(target, instance.name, instance.run);
                        (_c = (_b = target.events) === null || _b === void 0 ? void 0 : _b.set) === null || _c === void 0 ? void 0 : _c.call(_b, instance.name, instance);
                        if (this.debug)
                            this.log.debug(`Loaded ${defaultTarget ? 'Client' : (_d = target.constructor.name) !== null && _d !== void 0 ? _d : ''} Event - ${instance.name}`);
                    }
                }
            }
        });
    }
    init() {
        return Promise.all([
            this.registerEvents(path_1.join(__dirname, '..', 'events'))
        ]);
    }
}
exports.default = Client;
