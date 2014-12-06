requirejs.config({
    baseUrl: './js/lib',
    paths: {
        'require': '../require',
        'jquery': 'jquery-2.1.1',
        'highcharts': 'highcharts',
        'd3': 'd3',
        'underscore': 'underscore',
        'coffee-script': 'coffee-script',
        'papaparse': 'papaparse',
        'app': '../app'
    },
    shim: {
        'highcharts': {
            'deps': ['jquery'],
            'exports': 'Highcharts'
        },
        'jquery': {
            'exports': '$'
        },
        'underscore': {
            'exports': '_'
        },
        'papaparse' : {
            'exports': 'Papa'
        }
    }
});

// Start the main app logic
require(['./app/script']);
