<template>
  <el-row :gutter="20">
    <el-col :span="1">
      <el-tag style="height: 100%">
        {{ index + 1 }}
      </el-tag>
    </el-col>
    <el-col :span="20">
      <el-input v-model="item.name" placeholder="Введите дело" />
    </el-col>
    <el-col :span="1">
      <el-checkbox v-model="item.done" label="Сделано" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item", "index"],
};
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
