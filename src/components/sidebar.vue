<template>
  <HomeComponent>
    <!-- <template v-slot:title>Hi</template> -->
    <div class="space-y-4 flex flex-col justify-center items-center">
      <img :src="logo" class="max-w-16" />
      <div>Hello</div>
      <div>bye</div>
      <div>dsgfc</div>
    </div>
  </HomeComponent>
</template>

<script>
import HomeComponent from "../views/home.vue";
import logo from "/logo.png";
export default {
  name: "SideBar",
  components: {
    HomeComponent,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
