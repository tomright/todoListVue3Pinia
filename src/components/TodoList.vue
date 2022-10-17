<template>
  <TodoItem
    v-if="todoStore.items.length > 0"
    v-for="(item, index) in todoStore.items"
    :key="item.id"
    :item="item"
    :index="index"
    @delTodoItem="delItem"
  ></TodoItem>
  <p v-else>
    Список дел пуст, можете добавить новое дело, нажав на соответствующую кнопку
    :)
  </p>
  <el-button type="success" size="default" @click="addItem">
    <el-icon class="el-icon--left"><Plus /></el-icon> Добавить дело
  </el-button>
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
  methods: {
    addItem() {
      this.$router.push("/create/");
      // this.todoStore.addNewTodo();
    },
    delItem(event, event1) {
      this.todoStore.deleteItem(event);
    },
  },
  mounted() {
    this.todoStore.loadTodo();
  },
  components: { TodoItem },
};
</script>

<style>
.el-button {
  margin-top: 10px;
}
</style>
