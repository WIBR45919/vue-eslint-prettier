<template>
 ABout page
  <button type="button" @click="logout">Log out</button>
</template>

<script lang="js">
import { inject } from "vue";

export default {
  name: "AboutPage",
  setup: ()=>{
    const keycloak = inject("keycloakPlugin");
    const logout = () => {
      console.log(keycloak);
      localStorage.clear();
      keycloak.logout({  redirectUri : "http://localhost:3000/" });
    }

    return {
      logout
    }
  }
};
</script>

<style scoped>
@charset "utf-8";
@import url("");
</style>