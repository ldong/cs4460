requirejs.config({
    baseUrl: './js/lib',
    paths: {
        'require': '../require',
        'jquery': 'jquery-2.1.1',
        'highcharts': 'highcharts',
        'd3': 'd3',
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

// Start the main app logic
require(['./app/script']);
