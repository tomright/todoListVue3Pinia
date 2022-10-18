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
  context.store.makeRequest = async ({
    method: string = "get",
    url,
    params,
    data,
  }) => {
    let response;
    try {
      response = await instance({ method, url, params, data });
    } catch (error) {
      response = error.response;
    }
    let result = response.data;
    let isSuccess = response.status < 300;

    //отчет сформировался
    if (isSuccess) {
      return { isSuccess, result };
    }

    //ошибка валидации
    if (response.status === 400) {
      return { isSuccess, result };
    }

    //ошибка сервера
    if (response.status === 500) {
      return {
        isSuccess,
        result: {
          
        }
      }
    }
  };
}
