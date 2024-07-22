<template>
  <LMap ref="myMap" style="height: 300px" :zoom="zoom" :center="center">
    <LTileLayer :url="url" :attribution="attribution"></LTileLayer>
    <LMarker :lat-lng="markerLatLng"></LMarker>
  </LMap>
</template>

<script>
// If you need to reference 'L', such as in 'L.icon', then be sure to
// explicitly import 'leaflet' into your component
import L from "leaflet";
import { LMap, LTileLayer, LMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
export default {
  name: "ViewMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159],
    };
  },
  mounted() {
    this.$nextTick(() => {
      //   this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
    });
  },
};
</script>

<style lang="scss" scoped></style>
