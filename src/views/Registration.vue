<template>
  <div class="login-page">
    <div class="form">
      <form class="login-form">
        <input v-model="usern" type="text" placeholder="логин" />
        <input v-model="pass" type="password" placeholder="пароль" />
        <el-button type="success" size="default" @click="registration"
          >Регистрация</el-button
        >
      </form>
    </div>
  </div>
  <RouterLink to="/">вернуться домой</RouterLink>
</template>

<script>
import { useUserStore } from "../stores/user.js";
export default {
  name: "reg",
  data() {
    return {
      userstore: useUserStore(),
      usern: "",
      pass: "",
    };
  },
  methods: {
    registration() {
      this.userstore.register(this.usern, this.pass);
      console.log(this.userstore.test.data);
    },
  },
  mounted() {
    this.userstore.login("user", "12345678");
  },
};
</script>

<style>
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
</style>
