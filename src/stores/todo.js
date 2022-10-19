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
    save(text) {
      console.log("TODO Saved", text);
      const url = '/items/'
      const method = 'post'
      const data = {name: text}
      this.makeRequest({ method, url, data });
    },
    addNewTodo(elem) {
      //добавлено автоматическая генерация на стороне клиента id для каждого нового задания.
      this.items.push({
        id: this.items.length + 1,
        name: elem,
        done: false,
      });
    },
    deleteItem(item) {
      this.items.splice(item, 1);
    },
  },
});
