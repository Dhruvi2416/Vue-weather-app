<template>
  <div class="flex p-4 overflow-hidden min-h-screen">
    <SideBar class="flex flex-col" />
    <TodaysData />
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
