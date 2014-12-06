requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min",
        hchart: [
            "http://code.highcharts.com/highcharts",
            "http://code.highcharts.com/highcharts-more",
            "http://code.highcharts.com/modules/exporting"
        ]
    }
});

// Start the main app logic.
requirejs(['jquery-2.1.1', 'd3.min', 'underscore', 'hchart'],
function ($, d3, _, highcharts) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});
