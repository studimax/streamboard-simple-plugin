import StreamBoardSDK from "streamboard-sdk";


const sdk = new StreamBoardSDK();
console.log("plugin connected");

sdk.onConnection(context => {
    console.log(context);
    switch (context.action){
        case 'test-a':{
            let i = 0;
            context.setText("...");
            context.setColor("#1452bc");
            context.onPressUp(({pressDuration}) => {
                context.setText(`${pressDuration}`);
                if (++i % 2 == 0) {
                    context.setColor("#14bc30");
                } else {
                    context.setColor("#cf0000");
                }
            });
        }break;
        case 'test-b':{
            let i = 0;
            setInterval(()=>{
                context.setText(`${i++}`);
                context.setColor("#1452bc");
            },100);
        }break;
    }
    context.onSettings(() => {
        return [
            {
                label: "Test",
                action: "test",
                type: "input_select",
                items: []
            }
        ]
    });
});

sdk.ready();
