"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const events_1 = require("events");
class PluginAbstract {
    constructor() {
        this.event = new events_1.EventEmitter();
        this.init().then(() => {
            this.emit("ready");
            worker_threads_1.parentPort?.on("message", ({ event, data }) => {
                this.event.emit(event, data);
            });
        });
    }
    emit(event, data) {
        worker_threads_1.parentPort?.postMessage({
            event,
            data
        });
        return this;
    }
    on(event, listener) {
        return this.event.on(event, listener);
    }
    async init() {
    }
}
exports.default = PluginAbstract;
//# sourceMappingURL=PluginAbstract.js.map