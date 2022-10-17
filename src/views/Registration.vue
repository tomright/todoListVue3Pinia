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
      v-loading="isLoading"
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
  <!-- <RouterLink to="/">вернуться домой</RouterLink> -->
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
      isLoading: false,
    };
  },
  methods: {
    async registration() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) return;
      this.isLoading = true;
      const { isSuccess, result } = await this.userstore.register(
        this.formData.username,
        this.formData.pass
      );
      this.isLoading = false;
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
.form {
  position: relative;
  z-index: 1;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
</style>
