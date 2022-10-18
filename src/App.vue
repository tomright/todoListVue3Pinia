<template>
  <el-container>
    <el-header>
      <el-row :gutter="20" justify="end">
        <el-col v-if="userStore.token" :span="2" :offset="0">
          <el-button type="danger" size="default" @click="logOut"
            >Выход</el-button
          >
        </el-col>

        <el-col v-if="!userStore.token" :span="2" :offset="0">
          <el-button type="primary" size="default" @click="authorization">
            Войти
          </el-button>
        </el-col>
        <el-col v-if="!userStore.token" :span="2" :offset="0">
          <el-button color="#e51ed2" size="default" @click="registration"
            >Регистрация</el-button
          >
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <RouterView></RouterView>
    </el-main>
    <el-footer>
      <el-link type="primary" href="https://itcodegroup.ru/" target="_blank"
        >ООО "ИТ код"</el-link
      >
    </el-footer>
  </el-container>
</template>
<script>
import { useUserStore } from "./stores/user";
export default {
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  methods: {
    authorization() {
      this.$router.push("/login");
    },
    registration() {
      this.$router.push("/reg");
    },
    logOut() {
      localStorage.removeItem("token");
      this.userStore.logOut();
      this.$router.push("/login");
    },
  },
};
</script>
