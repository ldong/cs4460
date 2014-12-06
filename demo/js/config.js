requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'require': '../require',
        'jquery': 'jquery-2.1.1',
        'highcharts': 'highcharts',
        'd3': './d3',
        'underscore': 'underscore',
        'coffee-script': 'coffee-script',
        app: '../app'
    },
    shim: {
        'highcharts': {
            'exports': 'Highcharts',
            'deps': ['jquery']
        },
    }
});

// Start the main app logic.
// requirejs(['jquery-2.1.1', 'd3.min', 'underscore'],
// function ($, d3, _) {
//     //jQuery, canvas and the app/sub module are all
//     //loaded and can be used here now.
// });

require(['./app/script']);


