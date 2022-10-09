<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="main-container">
    <NavBar />
    <RouterView />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
}
</style>
