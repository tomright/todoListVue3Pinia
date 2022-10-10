<template>
  Тестовая страница
  <!-- <div v-for="item in "></div> -->
  {{todoStore.getItems}}
</template>
<script>
// import {useTodoStore} from '../stores/todo.js'
import { useTodoStore } from "/src/stores/todo.js";
export default {
  data() {
    return {
      todoStore: useTodoStore(),
    };
  },
};
</script>
<style></style>
