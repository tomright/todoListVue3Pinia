import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state() {
    return {
      token: undefined,
    };
  },
  actions: {
    async login(username, password) {
      const respons = await axios.post(
        "http://demo.telminov.ru:8082/user/login/",
        {
          username,
          password,
        }
      );
      this.token = respons.data.token;
    },
    register() {
      // TODO: реализовать метод регистрации пользователей.
      throw Error("Not implemented");
    },
  },
});
