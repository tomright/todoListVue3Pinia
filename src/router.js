import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/HomePage.vue"),
    meta: { title: "Домашняя страница" },
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
