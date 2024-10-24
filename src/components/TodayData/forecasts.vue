<template>
  <div
    id="forecastData"
    class="bg-weather-bg-transparent rounded-3xl flex flex-col flex-grow p-5 w-full md:w-2/5 overflow-hidden"
  >
    <div class="flex text-white justify-between">
      <div class="text-5xl">Forecast</div>
      <div class="bg-primary-black rounded-full space-x-2 flex w-auto">
        <button
          type="button"
          id="buttonA"
          class="p-1 px-4 rounded-full w-auto"
          :class="{ selectedDays: selectedDays === '3' }"
          @click="() => (selectedDays = '3')"
        >
          3 days
        </button>
        <button
          type="button"
          id="buttonB"
          class="p-1 px-4 rounded-full"
          :class="{ selectedDays: selectedDays === '10' }"
          @click="() => (selectedDays = '10')"
        >
          10 days
        </button>
      </div>
    </div>
    <div v-for="i in daysArray" :key="i">
      <NextThreeData :plusDate="i" />
    </div>
  </div>
</template>

<script>
import HomeComponent from "../../views/home-component.vue";
import sunCloud from "/sun-cloud.png";
import NextThreeData from "./forecast-data.vue";
// import { weatherKey } from "../../helper/helper";
export default {
  name: "ForeCast",
  components: {
    HomeComponent,
    NextThreeData,
  },

  data() {
    return {
      sunCloud,
      selectedDays: "3",
    };
  },

  computed: {
    daysArray() {
      let arr = [];
      for (let i = 1; i <= this.selectedDays; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
};
</script>

<style>
.selectedDays {
  background-color: #c4e9e9;
  color: black;
}

#forecastData {
  width: 40vw;
  max-height: 38vh;
  overflow: auto;
}
</style>
