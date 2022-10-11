<template>
    <TodoItem
      v-for="(item, index) in todoStore.items"
      :key="item.id"
      :item="item"
      :index="index"
    ></TodoItem>
<el-button type="success" size="default" @click="">Добавить дело</el-button>

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

<style> 
.el-button {
margin-top: 10px;
}
</style>
