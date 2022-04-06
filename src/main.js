import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import plugins from "./plugins/keycloak-plugin";


const app = createApp(App);

app.use(router).use(plugins).mount("#app");

const basePath = import.meta.env.VITE_BASE_URL;

router.beforeEach((to, from, next) => {
  const authentication = app.$keycloak;

  if (to.meta.isAuthenticated) {
    if (!authentication || !authentication.authenticated) {
      if (localStorage.getItem("tenant")) {
        authentication.init({
            onLoad: "login-required",
            pkceMethod: "S256",
            redirectUri: basePath + to.path,
          })
          .then((auth) => {
            if (auth) {
              localStorage.setItem("token", authentication.token);
              localStorage.setItem(
                "refresh-token",
                authentication.refreshToken
              );
              next();
            }
          });
      } else {
        // noinspection JSIgnoredPromiseFromCall
        router.push({ name: "entry-page"});
      }
    } else {
      next();
    }
  } else {
    next();
  }
});
