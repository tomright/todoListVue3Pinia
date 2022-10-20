<template>
  <el-collapse>
  <TodoItem
    v-if="todoStore.items.length > 0"
    v-for="(item, index) in todoStore.items"
    :key="item.id"
    :item="item"
    :index="index"
    @delTodoItem="delItem"
    @doneItem="sendDone"
  ></TodoItem>
  <p v-else>
    Список дел пуст, можете добавить новое дело, нажав на соответствующую кнопку
    :)
  </p>
</el-collapse>
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
    },
    delItem(event) {
      this.todoStore.deleteItem(event);
    },
    sendDone(item) {
      this.todoStore.done(item);
    },
  },
  components: { TodoItem },
  mounted() {
    this.todoStore.load();
  },
};
</script>

<style>
.el-button {
  margin-top: 10px;
}
</style>
