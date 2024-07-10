<template>
  <div class="flex items-center justify-center min-h-screen">
    <!-- <input
      id="search-city"
      class="p-2 rounded-md focus:outline-none focus:border-white shadow-2xl"
    /> -->
    <select
      v-model="selectedCountry"
      id="country"
      name="country"
      class="form-control px-3 py-2"
    >
      <option value="" selected disabled>Select a country</option>
      <option
        v-for="(country, index) in countries"
        :key="index"
        :value="country"
      >
        {{ country }}
      </option>
    </select>
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
