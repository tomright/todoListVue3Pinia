<template>
  <div class="content">
    <h1>Страница редактирования</h1>
    <el-row :gutter="20">
      <el-col>
        <el-input
          v-model="todoStore.items[id].name"
          type="textarea"
          ref="inputRef"
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="0" style="margin-bottom: 10px"
        >Описание задачи (если требуется):</el-col
      >
      <el-col>
        <el-input
          v-model="todoStore.items[id].description"
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

      <el-col :span="2" :offset="0">
        <el-checkbox
          v-model="todoStore.items[id].done"
          label="Сделано"
          style="height: 100%"
        />
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
    };
  },
  props: ["id"],
  methods: {
    save() {
      this.todoStore.save(this.todoStore.items[this.id]);
      this.doneItem();
      this.$router.push("/");
    },
    goHome() {
      this.$router.push("/");
    },
    doneItem() {
      this.todoStore.done(this.todoStore.items[this.id]);
    },
  },
  mounted() {
    this.$refs.inputRef.focus();
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
