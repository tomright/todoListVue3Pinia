<template>
  <li>
    {{item.id}}
    <input v-model="item.name" />
    <input type="checkbox" v-model="item.done" />
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"],
};
</script>

<style></style>
