import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state() {
    return {
      _token: undefined,
    };
  },
  getters: {
    token(state) {
      if (!state._token) {
        state._token = localStorage.getItem("token");
      }
      return state._token;
    },
  },
  actions: {
    async login(username, password) {
      let response;
      try {
        response = await this.$axios.post("/user/login/", {
          username,
          password,
        });
        this._token = response.data.token;
        localStorage.setItem("token", this._token);
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
        this._token = regRespons.data.token;
        localStorage.setItem("token", this._token);
      } catch (error) {
        regRespons = error.response;
      }
      let isSuccess = false;
      let result = "";
      if (regRespons.status === 201) {
        isSuccess = true;
      } else if (regRespons.status === 400) {
        result = regRespons.data
      } else {
        result = "Ошибка сервера";
      }
      return { isSuccess, result };
    },
    logOut() {
      this._token = undefined;
    },
  },
});
