define(['papaparse'], function(Papa){
    var Links = require(['../app/model/links'])
    var map = {};
    // var csvString = '1,2,3';
    // var results = Papa.parse(csvString);
    // console.log(results.data);
    Papa.parse("http://localhost:8080/data/links.csv", {
        config:{
            "header" : false
        },
        download: true,
        complete: function(results) {
            console.log("Remote file parsed!", results);
            for(var i=0; i < results.data.length; ++i){
                var
                for (var j=0; j<results.data[i].length; ++j){
                }
            }
        }
    });
});

