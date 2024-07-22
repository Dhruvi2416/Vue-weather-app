<template>
  <div class="flex space-x-6 items-center">
    <div class="relative inline-block">
      <i
        class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2"
      ></i>
      <input
        placeholder="Search City"
        class="bg-weather-bg-transparent rounded-full pl-10 pr-2 py-1"
      />
    </div>
    <div class="bg-weather-bg-transparent rounded-full text-primary-black">
      <button
        type="button"
        id="buttonC"
        class="p-1 px-4 rounded-full"
        :class="{ selectedTempScale: selectedTempScale === 'C' }"
        @click="() => (selectedTempScale = 'C')"
      >
        °C
      </button>
      <button
        type="button"
        id="buttonF"
        class="p-1 px-4 rounded-full"
        :class="{ selectedTempScale: selectedTempScale === 'F' }"
        @click="() => (selectedTempScale = 'F')"
      >
        °F
      </button>
    </div>
  </div>
</template>

<script>
// import HomeComponent from "../../views/home-component.vue";
export default {
  name: "SearchCity",
  components: {},
  data() {
    return {
      selectedTempScale: "C",
    };
  },
};
</script>

<style scoped>
.selectedTempScale {
  background-color: #c4e9e9;
}

::-webkit-input-placeholder {
  color: white;
}
</style>
