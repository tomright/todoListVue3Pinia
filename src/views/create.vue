<template>
  <div class="content">
    <h1>Страница создания</h1>
    <el-row :gutter="20">
      <el-col :span="12" :offset="0">Название задачи:</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col>
        <el-input
          v-model="todoText"
          rows="1"
          ref="inputRef"
          type="textarea"
          @input="valid"
          class="borderInput"
        ></el-input>
        <el-alert v-if="errorValidate" :title="errorValidate" type="error" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="0" style="margin-bottom: 10px"
        >Описание задачи (если требуется):</el-col
      >
      <el-col>
        <el-input
          v-model="todoDescription"
          rows="6"
          type="textarea"
          @input="valid"
          class="borderInput"
        ></el-input>
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
      todoDescription: "",
      errorValidate: "",
    };
  },
  props: ["id"],
  methods: {
    async save() {
      this.todoText = this.todoText.trim();
      if (this.todoText.length > 0) {
        this.todoStore.save({
          name: this.todoText,
          description: this.todoDescription,
        });
        this.$router.push("/");
      } else {
        this.errorValidate = "Название дела, не должен быть пустым!";
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
  mounted() {
    this.$refs.inputRef.focus();
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
.content {
  margin: auto;
  width: 900px;
}
.borderInput {
  border: 1px solid dodgerblue;
  border-radius: 5px;
}
</style>
