import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../view/EntryPage.vue";
import HomePage from "../view/HomePage.vue";
import { mustBeAuthenticated } from "../store/authentified";
import { inject } from "vue";

const routes = [
  {
    path: "/",
    component: EntryPage,
    meta: {
      isAuthenticated: false
    }
  },
  {
    path: "/home",
    component: HomePage,
    meta: {
      isAuthenticated: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
