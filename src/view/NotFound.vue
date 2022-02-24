<template>
 <section>
   <div class="shadow">
     <p>404 <span>Page Not Found</span></p>
   </div>
 </section>
</template>

<script lang="js">
export default {
  name: "NotFound"
};
</script>

<style scoped>
section{
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
p{
  font-size: 3.5rem;
  text-align: center;
}
span{
  display: block;
}
.shadow{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow:0 0 12px rgba(218, 116, 13, 0.5);
}
</style>