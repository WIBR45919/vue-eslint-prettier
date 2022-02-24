<template>
  <section style="padding:8rem;">
    <div>
      <form autocomplete="off">
        <div class="container">
          <label for="tenant"><b>Tenant</b></label>
          <input
            id="tenant"
            v-model.lazy="tenant"
            placeholder="Enter your tenant"
            type="text"
          >
          <button @click.prevent="initPages">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="js">

import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "EntryPage",
  setup: () => {
    const tenant = ref("");
    const router = useRouter();

    const initPages = () => {
      localStorage.setItem("tenant", tenant.value);
      router.push("/home");
    };

    return {
      tenant,
      initPages
    };
  }
};
</script>

<style scoped>
form {
  padding: 0 5rem;
  box-shadow: 0 0 2px gray;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  outline: none;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}

</style>