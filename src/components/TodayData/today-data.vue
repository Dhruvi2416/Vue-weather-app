<template>
  <div class="pl-8">
    <div class="text-primary-white flex justify-between items-center flex-grow">
      <TodaysGreeting /><SearchCity />
    </div>
    <div class="md:flex md:flex-wrap">
      <HourlyData class="w-1/2 mr-12 mt-14" />
      <ViewMap class="w-1/2 mt-14" />
    </div>
  </div>
</template>

<script>
// import HomeComponent from "../views/home.vue";
import TodaysGreeting from "../TodayData/today-data-greeting.vue";
import SearchCity from "../TodayData/search-city.vue";
import HourlyData from "./hourly-data.vue";
import ViewMap from "../Map/view-map.vue";
// import ViewMap from "../Map/view-map.vue";
export default {
  name: "TodaysData",
  components: { TodaysGreeting, SearchCity, HourlyData, ViewMap },
  mounted() {
    try {
      // Your map/chart initialization code
    } catch (error) {
      console.error("Error during mounted hook:", error);
    }
  },
};
</script>

<style lang="scss" scoped></style>
