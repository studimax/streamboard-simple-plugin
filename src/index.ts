import PluginAbstract from "streamboard-sdk/dist/PluginAbstract";
import {EventName} from "streamboard-sdk";

class SimplePlugin extends PluginAbstract {
    constructor() {
        super();
    }
    protected async init(): Promise<void> {
        console.log("plugin connected");
    }
}

const p = new SimplePlugin();
let i = 0;
p.onAction("ch.studimax.ch.simple-plugin.test", (ctx, event, data) => {
    ctx.setText(`${++i}`);
    switch (event) {
        case EventName.ADDED:
            ctx.setText("Hello");
            ctx.setColor("#1452bc");
            break
        case EventName.CLICK:
            ctx.setColor("#14bc30");
            break;
        case EventName.DBLCLICK:
            ctx.setImage("https://media.tenor.com/images/0ca6f8a1d31646286b94671f0cd0f5a4/tenor.gif");
            ctx.setColor("#bc141a");
            break;
    }
});
