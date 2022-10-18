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
  context.store.makeRequest = async ({ method = "get", url, params, data }) => {
    let response;
    try {
      response = await instance({ method, url, params, data });
      userStore._token = response.data.token;
    } catch (error) {
      response = error.response;
    }
    localStorage.setItem("token", userStore.token);
    let isSuccess = false;
    let result = "";
    if (response.status === 200 || response.status === 201) {
      isSuccess = true;
    } else if (response.status === 400) {
      if (response.data.non_field_errors) {
        result = response.data.non_field_errors.join(". ");
      } else {
        result = response.data;
      }
    } else {
      result = "Ошибка сервера";
    }
    return { isSuccess, result };
  };
}
