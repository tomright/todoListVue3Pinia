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
      let { isSuccess, result } = await this.makeRequest({
        method: "post",
        url: "/user/login/",
        data: { username, password },
      });
      return { isSuccess, result };
    },
    async register(username, password) {
      let { isSuccess, result } = await this.makeRequest({
        method: "post",
        url: "/user/register/",
        data: { username, password },
      });
      return { isSuccess, result };
    },
    logOut() {
      this._token = undefined;
    },
  },
});
