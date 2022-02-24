import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import  plugins  from "./plugins/keycloak-plugin"

const app = createApp(App);

  app.use(router)
  .use(plugins)
  .mount("#app");

router.beforeEach((to, from, next) => {
  const authentication = app.$keycloak;

  if (to.meta.isAuthenticated) {

    const basePath = window.location.toString();
    if (!authentication || !authentication.authenticated) {
      authentication.init({ onLoad: "login-required", redirectUri: basePath.slice(0, -1) + to.path }).then((auth)=>{
        if (auth){
          localStorage.setItem("token", authentication.token);
          localStorage.setItem("refresh-token", authentication.refreshToken);
          next();
        }
      })
    }
  } else {
    next()
  }
});