import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RandomView from "../views/RandomView.vue";
import EntriesDetails from "../views/EntriesDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/random",
      name: "random",
      component: RandomView,
    },
    {
      path: "/:apiId",
      name: "EntriesDetails",
      component: EntriesDetails,
    },
  ],
});

export default router;
