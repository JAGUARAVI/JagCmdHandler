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
const BaseEvent_1 = __importDefault(require("../classes/base/BaseEvent"));
module.exports = class Event extends BaseEvent_1.default {
    constructor() {
        super('messageCreate');
    }
    run(client, message) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (message.partial)
                yield message.fetch();
            if (message.channel.type === 'DM')
                return client.emit('directMessageCreate', message);
            if (message.webhookId)
                return client.emit('webhookMessage', message);
            if (!message.guild)
                return;
            if (!message.member || message.member.partial)
                yield ((_a = message.member) === null || _a === void 0 ? void 0 : _a.fetch());
            return client.textCommandHandler.run(message);
        });
    }
};
