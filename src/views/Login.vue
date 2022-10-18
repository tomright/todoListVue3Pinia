<template>
  <div class="form">
    <el-alert
      :title="error"
      v-if="error"
      type="error"
      effect="light"
      show-icon
      closable
    ></el-alert>

    <el-form
      :model="formData"
      label-width="150px"
      ref="form"
      @keyup.enter="logined"
      v-loading="isLoading"
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

  <!-- <RouterLink to="/">вернуться домой</RouterLink> -->
</template>

<script>
import { useUserStore } from "../stores/user.js";
export default {
  name: "login",
  data() {
    return {
      error: "",
      userstore: useUserStore(),
      formData: {
        username: "",
        pass: "",
      },
      isLoading: false,
    };
  },
  methods: {
    async logined() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) return;
      this.isLoading = true;
      const { isSuccess, result } = await this.userstore.login(
        this.formData.username,
        this.formData.pass
      );
      this.isLoading = false;
      if (isSuccess) {
        this.$router.push("/");
      } else {
        this.error = result;
      }
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
  max-width: 360px;
  margin: 0 auto;
  padding: 45px;
  text-align: left;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
</style>
