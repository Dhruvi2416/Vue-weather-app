<template>
  <div class="pl-8">
    <div class="text-primary-white flex justify-between items-center flex-grow">
      <TodaysGreeting /><SearchCity />
    </div>
    <div class="mt-14 flex">
      <HourlyData class="w-2/3" />
      <!-- <ViewMap /> -->
    </div>
  </div>
</template>

<script>
// import HomeComponent from "../views/home.vue";
import TodaysGreeting from "../TodayData/today-data-greeting.vue";
import SearchCity from "../TodayData/search-city.vue";
import HourlyData from "./hourly-data.vue";
// import ViewMap from "../Map/view-map.vue";
export default {
  name: "TodaysData",
  components: { TodaysGreeting, SearchCity, HourlyData },
};
</script>

<style lang="scss" scoped></style>
