import { createRouter, createWebHistory } from "vue-router";

import MainComponent from "../views/main.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
