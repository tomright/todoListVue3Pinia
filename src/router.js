import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/user.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/HomePage.vue"),
    meta: { title: "Домашняя страница" },
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("./views/edit.vue"),
    meta: { title: "Редактирование дела" },
    props: true,
  },
  {
    path: "/create/",
    name: "create",
    component: () => import("./views/create.vue"),
    meta: { title: "Создание дела" },
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/Login.vue"),
    meta: { title: "Страница входа" },
  },
  {
    path: "/reg",
    name: "reg",
    component: () => import("./views/Registration.vue"),
    meta: { title: "Регистрация" },
  },
];

const router = createRouter({ routes, history: createWebHistory() });
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title || "Список дел";
  const userStore = useUserStore();

  if (!userStore.token && to.name !== "login" && to.name !== "reg") {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
