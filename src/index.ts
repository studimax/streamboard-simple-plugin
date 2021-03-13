import StreamBoardSDK from "streamboard-sdk";

const sdk = new StreamBoardSDK();
console.log("plugin connected");
sdk.onConnection(context => {
    let i = 0;
    context.setText("...");
    context.setColor("#1452bc");
    context.onClick(() => {
        if (++i % 2 == 0) {
            context.setText("Hello");
            context.setColor("#14bc30");
        } else {
            context.setText("World");
            context.setColor("#cf0000");
        }
    });
});
