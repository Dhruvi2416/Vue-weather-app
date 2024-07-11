<template>
  <div class="flex p-4"><SideBar /><TodaysData /></div>
</template>

<script>
import TodaysData from "../components/today-data.vue";
import SideBar from "../components/sidebar.vue";
export default {
  name: "Main",
  components: {
    TodaysData,
    SideBar,
  },
};
</script>
