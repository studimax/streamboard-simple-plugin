import StreamBoardSDK from "streamboard-sdk";


const sdk = new StreamBoardSDK();
console.log("plugin connected");

sdk.setConfigForm('test-a',[
    {
        label: "Test",
        action: "test",
        type: "input_select",
        default:()=>'value_20',
        items: ()=>Array.from(Array(100),(i,index)=>({label:`Label ${index}`,value:`value_${index}`}))
    },
    {
        type: 'input_checkbox',
        label: "Boolean",
        action: 'check',
    },
    {
        type: 'input_checkbox',
        label: "Boolean",
        action: 'check',
        default:()=>true
    }
])

sdk.onContext(context => {
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
});

sdk.ready();
