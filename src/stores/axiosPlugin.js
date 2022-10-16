import { createPinia } from "pinia";
import axios from "axios";

export function axiosPiniaPlugin(context) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
  context.store.$axios = instance;
}
