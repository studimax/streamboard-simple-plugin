import PluginAbstract from "./src/PluginAbstract";

class SimplePlugin extends PluginAbstract {
  protected async init(): Promise<void> {
    console.log("plugin connected");
  }
}

const p = new SimplePlugin();
p.on("test", d => {
  console.log("Received=>", d);
});
