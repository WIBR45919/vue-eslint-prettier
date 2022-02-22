import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes";
import Keycloak from "keycloak-js";

createApp(App)
  .use(router)
  .mount('#app');


//   const initOptions = {
//     url: 'http://localhost:8080/',
//     realm: `demo`,
//     clientId: 'vue-demo-app',
//     onLoad: 'login-required'
//   }
//
//   const keycloak = Keycloak(initOptions);
//
//    keycloak.init({ onLoad: initOptions.onLoad }).then((auth)=>{
//      if (!auth){
//        window.location.reload();
//      }else {
//        localStorage.setItem("token",keycloak.token);
//        localStorage.setItem("refresh-token",keycloak.refreshToken);
//        createApp(App)
//          .use(router)
//          .mount('#app');
//      }
//    })

