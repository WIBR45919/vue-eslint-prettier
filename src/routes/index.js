import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../view/EntryPage.vue";
import HomePage from "../view/HomePage.vue";
import { mustBeAuthenticated } from "../store/authentified";

const routes = [
  {
    path: "/",
    component: EntryPage,
    beforeEnter: () => {
      if (!mustBeAuthenticated().getIsAuthenticated()) {
        return true;
      } else {
        return "/home";
      }
    },
  },
  {
    path: "/home",
    component: HomePage,
    beforeEnter: () => {
      if (mustBeAuthenticated().getIsAuthenticated()) {
        return true;
      } else {
        return "/";
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
