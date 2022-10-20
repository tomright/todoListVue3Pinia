<template>
  <el-row :gutter="3">
    <el-col :span="1">
      <el-tag size="large" style="height: 100%; font-size: large">
        {{ index + 1 }}
      </el-tag>
    </el-col>
    <el-col :span="16">
      <el-collapse-item
        style="border-bottom: 1px solid green"
        :title="itemCut()"
      >
        <div>{{ item.description }}</div>
      </el-collapse-item>
    </el-col>
    <el-col :span="1.1">
      <el-checkbox
        v-model="item.done"
        label="Сделано"
        style="position: sticky; margin: auto"
        @change="doneItem"
        size="large"
        border
      />
    </el-col>

    <el-col :span="1.1">
      <el-button-group>
        <el-popconfirm
          confirm-button-text="Да"
          cancel-button-text="Нет"
          title="Удалить?"
          @confirm="delTodoItem"
        >
          <template #reference>
            <el-button type="warning" size="small" style="height: 100%">
              <!-- @click="delTodoItem" -->
              Удалить
            </el-button>
          </template>
        </el-popconfirm>
        <el-button
          type="info"
          size="small"
          @click="goToEdit"
          style="height: 100%"
          >Редактировать
        </el-button>
      </el-button-group>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item", "index"],
  emits: ["delTodoItem", "doneItem"],
  methods: {
    delTodoItem() {
      this.$emit("delTodoItem", this.item);
    },
    goToEdit() {
      this.$router.push(`/edit/${this.index}`);
    },
    itemCut() {
      if (String(this.item.name.length) < 58) {
        return this.item.name;
      } else {
        return String(this.item.name).slice(0, 58) + "...";
      }
    },
    doneItem() {
      this.$emit("doneItem", this.item);
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
