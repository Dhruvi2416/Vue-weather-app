<template>
  <div class="text-primary-white">
    <HomeComponent>
      <!-- <template v-slot:title class="text-primary-white">Hi</template> -->
    </HomeComponent>
  </div>
</template>

<script>
import HomeComponent from "../views/home.vue";

export default {
  name: "TodaysData",
  components: {
    HomeComponent,
  },
};
</script>

<style lang="scss" scoped></style>
