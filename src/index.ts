import StreamBoardSDK from "streamboard-sdk";


const sdk = new StreamBoardSDK();
console.log("plugin connected");

sdk.setActionConfig('test-a', [
    {
        label: "Test",
        key: "test",
        type: "input_select",
        default: () => 'value_20',
        items: () => Array.from(Array(100), (i, index) => ({label: `Label ${index}`, value: `value_${index}`}))
    },
    {
        type: 'input_checkbox',
        label: "Boolean",
        key: 'check1',
    },
    {
        type: 'input_checkbox',
        label: "Boolean",
        key: 'check2',
        default: () => true
    }
])

sdk.onContext('test-a', context => {
    console.log(context);
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
});
sdk.onContext('test-b', context => {
    console.log(context);
    let i = 0;
    setInterval(() => {
        context.setText(`${i++}`);
        context.setColor("#1452bc");
    }, 100);
});
sdk.ready();
