import {parentPort} from "worker_threads";
import {EventEmitter} from "events";

export default abstract class PluginAbstract {
    private event = new EventEmitter();

    constructor() {
        this.init().then(() => {
            this.emit("ready");
            parentPort?.on("message", ({event, data}) => {
                this.event.emit(event, data);
            });
        });
    }

    public emit(event: string, data?: any) {
        parentPort?.postMessage({
            event,
            data
        });
        return this;
    }

    public on(event: string | symbol, listener: (...args: any[]) => void) {
        return this.event.on(event, listener);
    }

    protected async init(): Promise<void> {
    }
}
