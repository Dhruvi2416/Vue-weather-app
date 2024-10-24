<template>
  <div
    class="flex justify-between text-white bg-primary-black rounded-3xl p-6 mt-4 text-2xl"
  >
    <div class="flex space-x-2">
      <i class="fa-solid fa-cloud-sun"></i>
      <div>+20º/+20º</div>
    </div>
    <div>{{ foreCastedDay }}</div>
  </div>
</template>

<script>
export default {
  name: "ForecastData",
  props: {
    plusDate: { type: Number, default: 3 },
  },
  computed: {
    foreCastedDay() {
      let todayDate = new Date();
      todayDate.setDate(todayDate.getDate() + this.plusDate);
      let day = todayDate.getDate();
      let month = todayDate.toLocaleString("en-GB", { month: "short" });
      let weekday = todayDate.toLocaleString("en-GB", { weekday: "short" });
      return `${day} ${month}, ${weekday}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
