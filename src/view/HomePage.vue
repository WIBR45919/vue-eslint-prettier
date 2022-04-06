<template>
   Home Page
  <button type="button" @click="goToAbout">
    go to about page
  </button>
</template>

<script lang="js">
import { useRouter } from "vue-router";

export default {
  name: "HomePage",
  setup: ()=>{
    const router = useRouter();

    const goToAbout = () => {
      router.push("/about");
    };
    return {
      goToAbout,
    };
  },
};
</script>

<style scoped>

</style>