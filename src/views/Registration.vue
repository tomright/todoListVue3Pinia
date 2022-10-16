<template>
  <div class="form">
    <el-alert
      :title="errors"
      type="errors"
      v-if="errors"
      effect="light"
      show-icon
      closable
    ></el-alert>

    <el-form
      :model="formData"
      ref="form"
      label-width="150px"
      @keyup.enter="registration"
    >
      <el-form-item
        label="Имя пользователя"
        :rules="{ required: true, message: 'Это поле обязательно' }"
        prop="username"
      >
        <el-input v-model="formData.username" placeholder="Логин" />
      </el-form-item>
      <el-form-item
        label="Пароль"
        prop="pass"
        :rules="{ required: true, message: 'Это поле обязательно' }"
      >
        <el-input
          v-model="formData.pass"
          placeholder="Пароль"
          type="password"
          prop="pass"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="registration"
          >Зарегистрироваться</el-button
        >
      </el-form-item>
    </el-form>
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
      errors: "",
      formData: {
        username: "",
        pass: "",
      },
    };
  },
  methods: {
    async registration() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) return;
      const { isSuccess, result } = await this.userstore.register(
        this.formData.username,
        this.formData.pass
      );
      if (isSuccess) {
        this.$router.push("/");
      } else {
        this.errors = result;
      }
    },
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
