<template>
  <div class="flex space-x-6 items-center">
    <div class="relative inline-block">
      <i
        class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2"
      ></i>
      <input
        placeholder="Search City"
        class="bg-weather-bg-transparent rounded-full pl-10 pr-2 py-1"
        v-model="city"
      />
    </div>
    <div>
      <button
        type="button"
        class="p-1 px-4 rounded-full bg-data-bg-green text-primary-black"
        @click="handleChange"
        @click.stop
      >
        Search
      </button>
    </div>
    <div class="bg-weather-bg-transparent rounded-full text-white">
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
import Bus from "../../utils/emitter";
export default {
  name: "SearchCity",
  components: {},

  data() {
    return {
      selectedTempScale: "C",
      city: "",
    };
  },
  watch: {
    selectedTempScale(newValue, oldValue) {
      if (newValue !== oldValue) {
        Bus.$emit("tempScaleChange", this.selectedTempScale);
      }
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("changeCity", this.city);
    },
  },
};
</script>

<style scoped>
.selectedTempScale {
  background-color: #c4e9e9;
  color: black;
}

::-webkit-input-placeholder {
  color: white;
}
</style>
