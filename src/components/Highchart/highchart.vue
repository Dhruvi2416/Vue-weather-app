<template>
  <div id="container" style="height: 400px" class="flex flex-grow"></div>
</template>

<script>
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";

// Initialize the Exporting module
Exporting(Highcharts);

export default {
  name: "HighChart",
  mounted() {
    // Initialize the chart once the component is mounted
    this.createChart();
  },
  methods: {
    createChart() {
      Highcharts.chart("container", {
        chart: {
          type: "line",
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
              [0, "#201c24"],
              [1, "#201c24"],
            ],
          },
          borderWidth: 4,
          plotBackgroundColor: "#201c24",
          margin: 90,
          borderRadius: 12,
          borderColor: "#595b6c",
        },
        title: {
          text: "Overview",
          align: "left", // Align the title to the left

          style: {
            color: "#fcb020",
            font: ' 34px " Verdana, sans-serif',
            letterSpacing: "1px",
          },
          margin: 20,
        },
        xAxis: {
          labels: {
            style: {
              color: "rgba(255, 255, 255, .9)",
              font: 'bold 24px "Trebuchet MS", Verdana, sans-serif',
            },
          },
        },
        yAxis: {
          title: {
            text: "",
            style: {
              color: "#fcb020",
              font: 'bold 24px "Trebuchet MS", Verdana, sans-serif',
            },
          },
          labels: {
            style: {
              color: "rgba(255, 255, 255, .9)",
              font: 'bold 24px "Trebuchet MS", Verdana, sans-serif',
            },
          },
        },
        series: [
          {
            name: "Jane",
            data: [
              1, 2, 3, 4, 5, 2, 3, 2, 1, 2, 3, 4, 5, 6, 34, 3, 4, 5, 3, 45, 3,
              4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 4, 5, 0, 23, 32, 4, 2, 3, 2, 3, 2,
              4, 24, 24, 2, 4, 2, 4, 24, 2, 24, 2, 243, 2, 3, 4, 24, 23, 4,
            ],
            color: "white",
          },
        ],

        legend: {
          itemStyle: {
            color: "white", // Change the color of the series name in the legend
            font: 'bold 14px "Trebuchet MS", Verdana, sans-serif',
          },
          itemHoverStyle: {
            color: "#fcb020", // Color when hovering over the series name in the legend
          },
        },

        exporting: {
          buttons: {
            contextButton: {
              symbol: "menu", // Use 'menu' for three dots
              symbolSize: 14, // Adjust size if necessary
              symbolStrokeWidth: 1,
            },
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
