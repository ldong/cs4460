define(['papaparse', 'underscore', 'd3'], function(Papa, _, d3){
    var Links = require(['../app/model/links'])
    var url = 'http://localhost:8080/data/links.csv';
    var map = {};
    function parseData(results){
        for(var i=0; i < results.data.length; ++i){
            var id1 = results.data[i][0] || '';
            var id2 = results.data[i][1] || '';
            if(!map[id1]){
                var arr = [];
                arr.push(id2);
                map[id1] = arr;
            } else {
                var arr = map[id1];
                arr.push(id2);
                map[id1] = arr;
            }
        }
    }
    Papa.parse(url, {
        config:{
            "header" : false
        },
        download: true,
        complete: function(results){
            parseData(results);
        }
    });
    return map;
});
