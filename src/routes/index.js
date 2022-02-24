import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../view/EntryPage.vue";
import HomePage from "../view/HomePage.vue";
import AboutPage from "../view/AboutPage.vue";
import NotFound from "../view/NotFound.vue";

const routes = [
  {
    path: "/",
    component: EntryPage,
    name: "entry-page",
    alias: "/entry",
    meta: {
      isAuthenticated: false
    }
  },
  {
    path: "/home",
    component: HomePage,
    name: "home-page",
    meta: {
      isAuthenticated: true
    }
  },
  {
    path: "/about",
    component: AboutPage,
    name: "about-page",
    meta: {
      isAuthenticated: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    alias: "/not-found",
    meta: {
      isAuthenticated: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
