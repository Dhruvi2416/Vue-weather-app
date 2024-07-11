<template>
  <div class="flex">
    <div
      class="bg-weather-bg-transparent rounded-full text-primary-white text-3xl"
    >
      <h4 class="">
        <slot name="title"></slot>
      </h4>
      <div class="py-5">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import countries from "../constants/countries";
export default {
  name: "HomeComponent",
  data() {
    return {
      countries,
      selectedCountry: "",
    };
  },
  mounted() {
    document.getElementById("search-city").focus();
  },
};
</script>
