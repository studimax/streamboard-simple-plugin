import PluginAbstract, {EventName} from "streamboard-sdk";

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
p.onAction("test", (ctx, event) => {
    switch (event) {
        case EventName.ADDED:
            ctx.setText("...");
            ctx.setColor("#1452bc");
            break
        case EventName.CLICK:
            if (++i % 2 == 0) {
                ctx.setText("Hello");
                ctx.setColor("#14bc30");
            } else {
                ctx.setText("World");
                ctx.setColor("#cf0000");
            }
            break;
    }
});
