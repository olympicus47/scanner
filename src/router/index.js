import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import buttonView from "../views/buttonView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/button",
    name: "button",
    component: buttonView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
