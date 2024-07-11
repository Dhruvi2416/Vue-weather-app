<template>
  <div class="font-Roboto bg-weather-bg-primary min-h-screen">
    <Navigation />

    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navigation from "./components/navigation.vue";

export default {
  components: {
    RouterView,
    Navigation,
  },
};
</script>
<style lang="scss" scoped></style>
