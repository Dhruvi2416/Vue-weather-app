<template>
  <div
    class="rounded-full text-primary-white text-3xl flex flex-col bg-weather-bg-transparent"
  >
    <div class="flex flex-grow">
      <h4 class="text-5xl">
        <slot name="title"></slot>
      </h4>
      <div class="flex-grow">
        <slot></slot>
      </div>
    </div>
    <footer class="flex items-end pb-5 mt-auto">
      <slot name="footer"></slot>
    </footer>
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
};
</script>
