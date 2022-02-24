import Keycloak from "keycloak-js";


const options = {
  url: "http://localhost:8080/",
  realm: `${ localStorage.getItem("tenant") || 'demo' }`,
  clientId: "vue-demo-app",
  onLoad: "login-required",
};


  const keycloak = Keycloak(options);
  export default {
    install: (app)=>{
      app.$keycloak = keycloak
      app.provide("keycloakPlugin", app.$keycloak);
    }
  }

