<template>
  <div class="bg-weather-bg-transparent rounded-3xl p-5 flex flex-grow">
    <div class="flex flex-grow overflow-hidden">
      <div class="w-full">
        <div class="flex p-4">
          <img :src="sunCloud" class="rounded-full w-24 h-24 mr-8" />
          <HomeComponent class="flex flex-col space-y-4">
            <template v-slot:title
              ><div class="flex md:space-x-10 flex-nowrap">
                <div>
                  <div>{{ capitalizeFirstLetter }}</div>
                  <div class="text-lg">
                    {{ "(" + this.cityData.country + ")" }}
                  </div>
                </div>
                <div>
                  <div>{{ this.cityData.temp }}º</div>
                  <div class="text-lg">Temperature</div>
                </div>
                <div>
                  <div class="flex">
                    {{ this.cityData.humidity }}
                    <div class="text-lg flex items-end">%</div>
                  </div>

                  <div class="text-lg">Humidity</div>
                </div>
                <div>
                  <div class="flex pl-0">
                    {{ this.cityData.windSpeed }}
                    <div class="text-lg flex items-end">{{ " " }}km/h</div>
                  </div>
                  <div class="text-lg">Wind Speed</div>
                </div>
              </div>
            </template>
          </HomeComponent>
        </div>
        <div class="flex p-4 overflow-auto">
          <div v-for="n in arr" :key="n">
            <div
              class="bg-data-bg-green m-2 p-2 rounded-3xl flex flex-col items-center"
            >
              <div class="space-x-1 flex">
                <div>
                  {{ n }}
                </div>
                <div>am</div>
              </div>
              <div>
                <i class="fa-solid fa-cloud-sun"></i>
              </div>
              <div>
                {{ n }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeComponent from "../../views/home-component.vue";
import sunCloud from "/sun-cloud.png";
import Bus from "../../utils/emitter";
export default {
  name: "HourlyData",
  components: {
    HomeComponent,
  },

  props: {
    cityData: {
      type: Object,
      default: {
        city: "nan", // Default to an empty string or placeholder
        country: "",
        temp: null,
        humidity: null,
        windSpeed: null,
      },
    },
  },
  data() {
    return {
      sunCloud,
      selectedTempScale: "C",
      arr: [
        11, 21, 31, 14, 15, 61, 17, 18, 91, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24,
      ],
    };
  },
  created() {
    Bus.$on("tempScaleChange", (newScale) => {
      this.selectedTempScale = newScale;
    });
  },
  beforeDestroy() {
    Bus.$off("tempScaleChange");
  },
  computed: {
    capitalizeFirstLetter() {
      if (
        typeof this.cityData.city === "string" &&
        this.cityData.city.length > 0
      ) {
        return (
          this.cityData.city.charAt(0).toUpperCase() +
          this.cityData.city.slice(1)
        );
      } else {
        return ""; // Return a fallback or empty string
      }
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  color: red;
}
</style>
