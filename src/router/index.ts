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
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("../views/RulesView.vue"),
    },
    {
      path: "/variants",
      name: "variants",
      component: () => import("../views/VariantsView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/ContactsView.vue"),
    },
  ],
});

export default router;
