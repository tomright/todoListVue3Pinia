<template>
  Тестовая страница
  <pre v-for="item in todoStore.items">
    {{item.id}} {{item.name}} {{item.done}}
  </pre>
  <!-- <pre>{{ todoStore.getItem }}</pre> -->
  <input v-model="imputMessage" placeholder="Введите дело">
  <button @click="addTodo">Записать дело</button>
</template>
<script>
// import {useTodoStore} from '../stores/todo.js'
import { useTodoStore } from "/src/stores/todo";
export default {
  data() {
    return {
      todoStore: useTodoStore(),
      imputMessage: '',
    };
  },
  methods: {
    addTodo() {
      this.todoStore.addNewTodo({ id: 'none', name: this.imputMessage, done: false });
    }
  }
};
</script>
<style></style>
