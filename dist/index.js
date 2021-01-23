"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PluginAbstract_1 = __importDefault(require("./src/PluginAbstract"));
class SimplePlugin extends PluginAbstract_1.default {
    async init() {
        console.log("plugin connected");
    }
}
const p = new SimplePlugin();
p.on("test", d => {
    console.log("Received=>", d);
});
//# sourceMappingURL=index.js.map