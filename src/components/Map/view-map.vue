<template>
  <div
    class="rounded-3xl border-weather-bg-transparent border-4 flex flex-grow"
    id="mapContainer"
  ></div>
</template>

<script>
import { map, tileLayer, icon, marker } from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "ViewMap",
  data() {
    return {
      container: null,
    };
  },
  mounted() {
    // Use this.$nextTick to ensure the DOM is fully rendered before initializing the map
    this.$nextTick(() => {
      // Initialize the map
      this.container = map("mapContainer").setView([51.959, -8.623], 12);

      // Add the tile layer
      tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {}
      ).addTo(this.container);

      // Define the custom icon
      const customIcon = icon({
        iconUrl: "public/map-pin.png",
        iconSize: [48, 48],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });

      // Add a marker with the custom icon
      marker([51.959, -8.623], { icon: customIcon }).addTo(this.container);
    });
  },
  beforeDestroy() {
    if (this.container) {
      this.container.remove();
    }
  },
};
</script>

<style>
#mapContainer {
  width: 40vw;
  height: 40vh;
}
</style>
