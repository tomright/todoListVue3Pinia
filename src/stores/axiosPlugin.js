import axios from "axios";
import { useUserStore } from "./user";

export function axiosPiniaPlugin(context) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const userStore = useUserStore();
  if (userStore.token) {
    instance.defaults.headers.common[
      "Authorization"
    ] = `Token ${userStore.token}`;
  }

  context.store.$axios = instance;
}
