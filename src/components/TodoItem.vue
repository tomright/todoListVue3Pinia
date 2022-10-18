<template>
  <el-row :gutter="10">
    <el-col :span="1">
      <el-tag size="large" style="height: 100%; font-size: large">
        {{ index + 1 }}
      </el-tag>
    </el-col>
    <el-col :span="17">
      <p>{{ itemCut() }}</p>
    </el-col>
    <el-col :span="1.1">
      <el-checkbox v-model="item.done" label="Сделано" style="height: 100%" />
    </el-col>

    <el-col :span="1.1">
      <el-button-group>
        <el-button
          type="warning"
          size="small"
          @click="delTodoItem"
          style="height: 100%"
        >
          Удалить
        </el-button>
        <el-button
          type="info"
          size="small"
          @click="goToEdit"
          style="height: 100%"
          >Редактировать</el-button
        >
      </el-button-group>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item", "index"],
  emits: ["delTodoItem"],
  methods: {
    delTodoItem() {
      this.$emit("delTodoItem", this.index);
    },
    goToEdit() {
      this.$router.push(`/edit/${this.index}`);
    },
    itemCut() {
      if (String(this.item.name.lenght) < 58) {
        return this.item.name;
      } else {
        return String(this.item.name).slice(0, 58) + "...";
      }
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
  border-bottom: 1px solid green;
}
</style>
