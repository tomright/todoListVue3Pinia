<template>
  <h1>Список дел</h1>
  <TodoList></TodoList>
</template>
<script>
import TodoList from "./TodoList.vue";
export default {
  data() {
    return {
      imputMessage: "",
    };
  },
  components: { TodoList },
};
</script>
<style></style>
