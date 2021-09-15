"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("./Logger"));
const General_1 = __importDefault(require("./General"));
const Parsebool_1 = __importDefault(require("./Parsebool"));
const Merge_1 = __importDefault(require("./Merge"));
const Time_1 = __importDefault(require("./Time"));
class Utils {
}
exports.default = Utils;
Utils.logger = Logger_1.default;
Utils.general = General_1.default;
Utils.time = Time_1.default;
Utils.parsebool = Parsebool_1.default;
Utils.merge = Merge_1.default;
