<template>
  <ul>
    <TodoItem
      v-for="item in todoStore.items"
      :key="item.id"
      :item="item"
    ></TodoItem>
  </ul>
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
