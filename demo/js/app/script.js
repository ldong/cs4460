// requirejs(['jquery-2.1.1', 'd3', 'underscore', 'Highcharts'],
// function ($, d3, _, Highcharts) {
//       console.log("Run");
// });

define(function(require){
    var model = require('./model/Base');
    var m = new model("hi");
    console.log(m);
});
