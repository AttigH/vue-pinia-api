<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="main-container">
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
}
</style>
