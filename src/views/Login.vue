<template>
  <h1>Страница входа</h1>
  <!-- <p>{{ userStore.token }}</p> -->
  <RouterLink to="/">Вернуться домой</RouterLink>
</template>

<script>
import { useUserStore } from "../stores/user.js";
export default {
  name: "login",
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  mounted() {
    this.userStore.login("user", "12345678");
  },
};
</script>

<style></style>
