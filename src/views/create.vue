<template>
  <div class="content">
    <h1>Страница создания</h1>
    <el-row :gutter="20">
      <el-col>
        <el-input v-model="todoText" type="textarea"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2.4" :offset="0">
        <el-button type="success" size="default" @click="save"
          >Сохранить</el-button
        >
      </el-col>
      <el-col :span="2.4" :offset="0">
        <el-button type="primary" size="default" @click="goHome"
          >Назад</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { useTodoStore } from "../stores/todo";
export default {
  data() {
    return {
      todoStore: useTodoStore(),
      todoText: "",
    };
  },
  props: ["id"],
  methods: {
    save() {
      this.todoStore.addNewTodo(this.todoText);
      this.$router.push("/");
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.el-row {
  margin-bottom: 10px;
}
.content {
  margin: auto;
  width: 900px;
}
</style>
