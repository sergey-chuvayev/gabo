import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/game",
      name: "game",
      redirect: "/game/registration",
      children: [
        {
          path: "registration",
          component: () => import("../views/GameView.vue"),
        },
        {
          path: "round",
          component: () => import("../views/RoundView.vue"),
        },
      ],
    },
  ],
});

export default router;
