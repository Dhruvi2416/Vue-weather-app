<template>
  <div class="rounded-3xl flex flex-grow mt-14 md:flex-row md:space-x-12">
    <div id="container" style="height: 400px"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";

// Initialize the Exporting module
Exporting(Highcharts);

// Custom symbol for three dots (menu-like)
Highcharts.SVGRenderer.prototype.symbols.menuDots = function (
  x,
  y,
  width,
  height
) {
  return [
    "M",
    x - 2,
    y + height / 2 - 2,
    "a",
    2,
    2,
    0,
    1,
    0,
    4,
    0,
    "a",
    2,
    2,
    0,
    1,
    0,
    -4,
    0,

    "M",
    x + width / 2 - 2,
    y + height / 2 - 2,
    "a",
    2,
    2,
    0,
    1,
    0,
    4,
    0,
    "a",
    2,
    2,
    0,
    1,
    0,
    -4,
    0,

    "M",
    x + width - 2,
    y + height / 2 - 2,
    "a",
    2,
    2,
    0,
    1,
    0,
    4,
    0,
    "a",
    2,
    2,
    0,
    1,
    0,
    -4,
    0,
  ];
};

export default {
  name: "HighChart",
  mounted() {
    // Initialize the chart after the component is mounted
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
          align: "left",
          style: {
            color: "#fcb020",
            font: '34px "Verdana, sans-serif"',
            letterSpacing: "1px",
          },
          margin: 20,
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          labels: {
            style: {
              color: "rgba(255, 255, 255, 0.9)",
              font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
            },
          },
          tickAmount: 24,
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
              color: "rgba(255, 255, 255, 0.9)",
              font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
            },
          },
          tickAmount: 10,
        },
        series: [
          {
            name: "Monthly Data",
            data: [
              29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
              194.1, 95.6, 54.4,
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
              symbol: "menuDots", // Use custom three dots symbol
              symbolSize: 14, // Adjust size if necessary
              symbolStrokeWidth: 1,
              theme: {
                fill: "none", // Removes the background
                stroke: "none", // Removes the border
                states: {
                  hover: {
                    fill: "none", // Removes background on hover
                    stroke: "none", // Removes border on hover
                  },
                  select: {
                    fill: "none", // Removes background on select (if needed)
                    stroke: "none", // Removes border on select
                  },
                },
              },
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  max-width: 865px;
}
</style>
