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
        super('interactionCreate');
    }
    run(client, interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!interaction.inGuild())
                return client.emit('directInteractionCreate', interaction);
            return client.applicationCommandHandler.run(interaction);
        });
    }
};
