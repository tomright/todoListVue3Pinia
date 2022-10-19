<template>
  <div class="content">
    <h1>Страница создания</h1>
    <el-row :gutter="20">
      <el-col>
        <el-input
          v-model="todoText"
          rows="6"
          ref="text"
          type="textarea"
          @input="valid"
        ></el-input>
        <el-alert v-if="errorValidate" :title="errorValidate" type="error" />
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
      errorValidate: "",
    };
  },
  props: ["id"],
  methods: {
    async save() {
      this.todoText = this.todoText.trim();
      if (this.todoText.length > 0) {
        this.todoStore.save(this.todoText);
        this.$router.push("/");
      } else {
        this.errorValidate = "Текст дела, не должен быть пустым!";
      }
    },
    goHome() {
      this.$router.push("/");
    },
    valid(e) {
      if (e.length > 0) {
        this.errorValidate = "";
      }
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
