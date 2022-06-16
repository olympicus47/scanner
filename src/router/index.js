import { createRouter, createWebHashHistory } from "vue-router";
import ViewInceput from "../views/ViewInceput.vue";

const routes = [
  {
    path: "/",
    name: "Inceput",
    component: ViewInceput,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
