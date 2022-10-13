import { createRouter, createWebHistory } from "vue-router";

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
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
