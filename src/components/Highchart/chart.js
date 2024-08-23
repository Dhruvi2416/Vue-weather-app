var Highcharts = require("highcharts");
// Load module after Highcharts is loaded
require("highcharts/modules/exporting")(Highcharts);
// Create the chart
Highcharts.chart("container", {
  /*Highcharts options*/
});

// Highstock bundle includes Stock and basic Highcharts
var Highcharts = require("highcharts/highstock");
// Load Highcharts Maps as a module to get both Maps and Stock
require("highcharts/modules/map")(Highcharts);

// Highmaps bundle still includes basic Highcharts, but not Stock
var Highcharts = require("highcharts/highmaps");
