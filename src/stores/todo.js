import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state() {
    return {
      items: [],
    };
  },
  getters: {
    getItem(state) {
      console.log(state);
      return state.items;
    },
  },
  actions: {
    async load() {
      const response = await this.$axios.get("/items/");
      this.items = response.data;
    },
    save() {
      console.log("TODO Saved");
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
      console.log("deleteItem", item);
      console.log(typeof item);
      this.items.splice(item, 1);
      console.log(this.items.slice(item, 1));
    },
  },
});
