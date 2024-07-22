<template>
  <div class="bg-weather-bg-transparent rounded-3xl p-5">
    <div class="flex">
      <div>
        <div class="flex p-4">
          <img :src="sunCloud" class="rounded-full w-24 h-24 mr-8" />
          <HomeComponent class="flex flex-col space-y-4">
            <template v-slot:title
              ><div class="flex md:space-x-14 flex-nowrap">
                <div>
                  <div>Berlin</div>
                  <div class="text-xl">Germany</div>
                </div>
                <div>
                  <div>+20º</div>
                  <div class="text-xl">Temperature</div>
                </div>
                <div>
                  <div class="flex">
                    20
                    <div class="text-xl flex items-end">%</div>
                  </div>

                  <div class="text-xl">Humidity</div>
                </div>
                <div>
                  <div class="flex">
                    13
                    <div class="text-xl flex items-end">km/h</div>
                  </div>
                  <div class="text-xl">Wind Speed</div>
                </div>
              </div>
            </template>
          </HomeComponent>
        </div>
        <div class="flex w-full md:w-3/4 lg:w-3/4 p-4 overflow-auto">
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
import * as L from "leaflet";
export default {
  name: "HourlyData",
  components: {
    HomeComponent,
  },

  data() {
    return {
      sunCloud,
      arr: [
        11, 21, 31, 14, 15, 61, 17, 18, 91, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24,
      ],
    };
  },
  created() {
    var map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();
  },
};
</script>

<style>
::-webkit-scrollbar {
  color: red;
}
</style>
