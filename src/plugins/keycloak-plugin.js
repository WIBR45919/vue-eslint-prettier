import Keycloak from "keycloak-js";


const options = {
  url: "http://localhost:8080/auth",
  realm: `${ localStorage.getItem("tenant") || 'student' }`,
  clientId: "viwanda-web",
  "enable-pkce": true,
  onLoad: "login-required",
  scope: "openId",
};


  const keycloak = Keycloak(options);
  export default {
    install: (app)=>{
      app.$keycloak = keycloak
      app.provide("keycloakPlugin", app.$keycloak);
    }
  }

