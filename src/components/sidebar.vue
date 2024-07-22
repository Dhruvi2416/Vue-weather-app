<template>
  <div>
    <HomeComponent class="flex-grow">
      <!-- <template v-slot:title>Hi</template> -->
      <div
        class="space-y-6 flex flex-col flex-grow justify-center items-center logo w-full py-5"
      >
        <img :src="logo" class="max-w-16" />

        <div class="icon w-full py-2 flex justify-center">
          <i class="fa-regular fa-user"></i>
        </div>
        <div class="icon w-full py-2 flex justify-center">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div class="icon w-full py-2 flex justify-center">
          <i class="fa-solid fa-cloud-sun-rain"></i>
        </div>
        <div class="icon w-full py-2 flex justify-center">
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="icon w-full py-2 flex justify-center">
          <i class="fa-solid fa-gear"></i>
        </div>
      </div>
      <template v-slot:footer>
        <div class="w-full py-2 flex justify-center">
          <i class="icon fa-solid fa-power-off"></i></div
      ></template>
    </HomeComponent>
  </div>
</template>

<script>
import HomeComponent from "../views/home-component.vue";
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

<style scoped>
.icon:hover {
  color: #fcb020;
}
</style>
