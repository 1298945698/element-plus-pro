import ElementPlus from "element-plus";
import { App } from "vue";

import "element-plus/lib/theme-chalk/index.css";

export default function installElementPlus(app: App<Element>) {
  app.use(ElementPlus);
}
