import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import { axiosPiniaPlugin } from "./stores/axiosPlugin";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import ru from "element-plus/es/locale/lang/ru";

const pinia = createPinia();
pinia.use(axiosPiniaPlugin);

const app = createApp(App);
app
  .use(router)
  .use(pinia)
  .use(ElementPlus, {
    locale: ru,
  })
  .mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
