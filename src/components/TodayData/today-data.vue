<template>
  <div class="pl-8">
    <div class="text-primary-white flex justify-between items-center flex-grow">
      <TodaysGreeting /><SearchCity @changeCity="updateCity($event)" />
    </div>
    <div class="md:flex md:flex-wrap">
      <HourlyData class="w-1/2 mr-12 mt-14" :cityData="cityData" />
      <ViewMap class="w-1/2 mr-12 mt-14" />
    </div>
    <div class="md:flex md:flex-wrap">
      <Chart class="mt-14" />
      <Forecast class="w-1/2 mr-12 mt-14" />
    </div>
  </div>
</template>

<script>
// import HomeComponent from "../views/home.vue";
import TodaysGreeting from "../TodayData/today-data-greeting.vue";
import SearchCity from "../TodayData/search-city.vue";
import HourlyData from "./hourly-data.vue";
import ViewMap from "../Map/view-map.vue";
import Chart from "../Highchart/highchart.vue";
import Forecast from "../TodayData/forecasts.vue";

export default {
  name: "TodaysData",
  components: {
    TodaysGreeting,
    SearchCity,
    HourlyData,
    ViewMap,
    Chart,
    Forecast,
  },
  data() {
    return {
      city: "Berlin",
      apiKey: "58bf940718a7fff26b0b3ea1150aa33d",
      cityData: {},
    };
  },
  async mounted() {
    await this.fetchTodaysData();
  },
  watch: {
    city: {
      // immediate: true, // Optional: if you want to fetch data on component mount as well
      handler(newValue, oldValue) {
        if (newValue !== oldValue) this.fetchTodaysData(); // Fetch data when city changes
      },
    },
  },
  methods: {
    updateCity(newCity) {
      this.city = newCity;
      console.log("YUYIYUYU", this.city);
    },

    fetchTodaysData() {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${this.apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.cityData = {
            city: this.city,
            country: data.sys.country,
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
          };
        })

        .catch((error) => console.error("Error:", error));
    },
  },
};
</script>

<style lang="scss" scoped></style>
