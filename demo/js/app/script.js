define(['papaparse', 'Q', './generators/generateAll'], function(Papa, Q){
    // var map0 = require('./app/generators/generateLinks');
    // var map1 = require(['./app/generators/generateEdits']);
    // var map2 = require(['./app/generators/generateArtricle']);
    // var map3 = require(['./app/generators/generateProtection']);
    // var map0 = require(['./app/generators/generateLinks']);

    var init = require('./app/generators/generateAll');
    /* Article models are loaded in -> window.models */
    init({
        data: {'world': 'hello'},
        logics: function(){
            console.log("overloaded?");
            console.log('window.models '+ window.models);
            // logics goes here
        }
    }).papa();
});

