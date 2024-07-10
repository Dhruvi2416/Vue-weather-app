<template>
  <div class="font-Roboto bg-weather-primary min-h-screen">
    <Navigation />

    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    RouterView,
    Navigation,
  },
};
</script>
<style lang="scss" scoped></style>
