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
      let response;
      try {
        response = await this.$axios.post("/user/login/", {
          username,
          password,
        });
        this.token = response.data.token;
      } catch (error) {
        response = error.response;
      }
      let isSuccess = false;
      let result = "";
      if (response.status === 200) {
        isSuccess = true;
      } else if (response.status === 400) {
        result = response.data.non_field_errors.join(". ");
      } else {
        result = "Ошибка сервера";
      }
      return { isSuccess, result };
    },
    async register(username, password) {
      // TODO: реализовать метод регистрации пользователей.
      // throw Error("Not implemented");
      let regRespons;
      try {
        regRespons = await this.$axios.post("/user/register/", {
          username,
          password,
        });
        this.token = regRespons.data.token;
      } catch (error) {
        regRespons = error.response;
      }
      let isSuccess = false;
      let result = "";
      if (regRespons.status === 201) {
        isSuccess = true;
      } else if (regRespons.status === 400) {
        result = regRespons.data.non_field_errors.join(". ");
      } else {
        result = "Ошибка сервера";
      }
      return { isSuccess, result };
    },
  },
});
