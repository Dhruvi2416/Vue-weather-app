<template>
  <div class="bg-weather-bg-transparent rounded-3xl p-5 flex flex-grow">
    <div class="flex flex-grow overflow-hidden">
      <div class="w-full">
        <div class="flex p-4">
          <img :src="sunCloud" class="rounded-full w-24 h-24 mr-8" />
          <HomeComponent class="flex flex-col space-y-4">
            <template v-slot:title
              ><div class="flex flex-nowrap">
                <div style="max-width: 220px" class="mr-6">
                  <div class="truncate">{{ capitalizeFirstLetter }}</div>
                  <div class="text-2xl">
                    {{ "(" + this.cityData.country + ")" }}
                  </div>
                </div>
                <div style="width: 140px" class="mr-6">
                  <span>
                    {{
                      this.selectedTempScale === "C"
                        ? this.cityData.cTemp
                        : this.cityData.fTemp
                    }}</span
                  ><span class="text-2xl">
                    º{{ this.selectedTempScale === "C" ? "C" : "F" }}
                  </span>
                  <div class="text-2xl">Temperature</div>
                </div>
                <div style="width: 80px" class="mr-6">
                  <div class="flex">
                    {{ this.cityData.humidity }}
                    <div class="text-2xl flex items-end">%</div>
                  </div>

                  <div class="text-2xl">Humidity</div>
                </div>
                <div>
                  <div class="flex pl-0">
                    {{ this.cityData.windSpeed }}
                    <div class="text-2xl flex items-end">{{ " " }}km/h</div>
                  </div>
                  <div class="text-2xl">Wind Speed</div>
                </div>
              </div>
            </template>
          </HomeComponent>
        </div>
        <div class="flex pt-4 overflow-auto">
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
        cTemp: null,
        fTemp: null,
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

  async mounted() {
    await this.fetchHourlyData();
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
  methods: {
    fetchHourlyData() {
      fetch(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${this.cityData.city}&appid=${this.cityData.api}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("DATA", data);
        });
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  color: red;
}
</style>
