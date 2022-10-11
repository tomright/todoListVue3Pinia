import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state() {
    return {
      items: [
        { id: 1, name: "Купить хлеба", done: true },
        { id: 2, name: "Купить молоко", done: false },
      ],
    };
  },
  getters: {
    getItem(state) {
      console.log(state);
      return state.items;
    },
  },
  actions: {
    save() {
      console.log("TODO Saved");
    },
    addNewTodo() {
      this.items.push({ id: undefined, name: "", done: false });
    },
    deleteItem(item) {
      console.log("deleteItem", item);
      console.log(typeof item);
      this.items.splice(item, 1);
      console.log(this.items.slice(item, 1));
    },
  },
});
