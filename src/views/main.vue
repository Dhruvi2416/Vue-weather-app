<template>
  <div class="flex p-4 min-h-screen">
    <SideBar class="flex flex-col" />
    <TodaysData class="w-3/4 flex-grow" />
  </div>
</template>

<script>
import TodaysData from "../components/TodayData/today-data.vue";
import SideBar from "../components/sidebar.vue";
export default {
  name: "Main",
  components: {
    TodaysData,
    SideBar,
  },
};
</script>
