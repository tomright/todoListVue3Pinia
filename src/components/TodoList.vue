<template>
  <ul>
    <TodoItem
      v-for="(item, index) in todoStore.items"
      :key="item.id"
      :item="item"
      :index="index"
    ></TodoItem>
  </ul>
  <button>Добавить дело</button>
</template>

<script>
import { useTodoStore } from "../stores/todo";
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  data() {
    return {
      todoStore: useTodoStore(),
    };
  },
  components: { TodoItem },
};
</script>

<style></style>
