import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
        {
          path: "results",
          component: () => import("../views/ResultsView.vue"),
        },
      ],
    },
  ],
});

export default router;
