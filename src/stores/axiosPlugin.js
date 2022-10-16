import { createPinia } from "pinia";
import axios from "axios";

export function axiosPiniaPlugin(context) {
  const instance = axios.create({
    baseURL: "http://demo.telminov.ru:8082",
  });
  context.store.$axios = instance;
}
