<template>
  <div class="form">
    <el-form
      :model="formData"
      label-width="150px"
      ref="form"
      @keyup.enter="logined"
    >
      <el-form-item
        label="Имя пользователя"
        prop="username"
        :rules="{ required: true, message: 'Это обязательное поле!' }"
      >
        <el-input v-model="formData.username" placeholder="Введите логин" />
      </el-form-item>
      <el-form-item
        label="Пароль"
        prop="pass"
        :rules="{ required: true, message: 'Это обязательное поле' }"
      >
        <el-input
          v-model="formData.pass"
          placeholder="Введите пароль"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default" @click="logined"
          >Войти</el-button
        >
      </el-form-item>
    </el-form>
  </div>

  <RouterLink to="/">вернуться домой</RouterLink>
</template>

<script>
import { useUserStore } from "../stores/user.js";
export default {
  name: "login",
  data() {
    return {
      userstore: useUserStore(),
      formData: {
        username: "",
        pass: "",
      },
    };
  },
  methods: {
    async logined() {
      this.userstore.login(this.formData.username, this.formData.pass);
    },
  },
  mounted() {
    // this.userstore.login("user", "12345678");
  },
};
</script>

<style>
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto;
  padding: 45px;
  text-align: left;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
</style>
