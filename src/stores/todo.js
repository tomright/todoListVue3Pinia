import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state() {
    return {
      items: [],
    };
  },
  getters: {
    getItem(state) {
      return state.items;
    },
  },
  actions: {
    async load() {
      const { isSucsess, result } = await this.makeRequest({ url: "/items/" });
      this.items = result;
    },
    async save(text) {
      let url = "/items/";
      let method = "post";
      let data = { name: text.name };
      if (text.id) {
        url += `${text.id}/`;
        method = "put";
      }
      await this.makeRequest({ method, url, data });
      this.load();
    },
    async deleteItem(item) {
      let { isSuccess, result } = await this.makeRequest({
        method: "delete",
        url: `/items/${item.id}/`,
      });
      if (isSuccess) {
        this.items.splice(this.items.indexOf(item), 1);
      }
      this.load();
    },
    async done(item) {
      let url;
      let method = "post";
      if (item.done) {
        url = `/items/${item.id}/set_done/`;
      } else {
        url = `/items/${item.id}/unset_done/`;
      }
      let { isSuccess, result } = await this.makeRequest({ method, url });
      return { isSuccess, result };
    },
  },
});
