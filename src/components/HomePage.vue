<template>
<h1>Список дел</h1>
<TodoList></TodoList>  
</template>
<script>
// import {useTodoStore} from '../stores/todo.js'
import { useTodoStore } from "/src/stores/todo";
import TodoList from './TodoList.vue';
export default {
    data() {
        return {
            imputMessage: "",
        };
    },
    methods: {
        addTodo() {
            this.todoStore.addNewTodo({ id: "none", name: this.imputMessage, done: false });
        }
    },
    components: { TodoList }
};
</script>
<style></style>
