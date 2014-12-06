// requirejs(['jquery-2.1.1', 'd3', 'underscore', 'Highcharts'],
// function ($, d3, _, Highcharts) {
//       console.log("Run");
// });

define(['papaparse'], function(Papa){
    // var csvString = '1,2,3';
    // var results = Papa.parse(csvString);
    // console.log(results.data);
    Papa.parse("http://localhost:8080/data/article.csv", {
    	download: true,
    	complete: function(results) {
		console.log("Remote file parsed!", results);
	}
    });
});

function a(){
    var id = 0,
    id1 = 1,
    id2 = 2,
    date = new Date(),
    start = new Date()
    end = new Date(),
    title = 'title is here',
    category = 'history',
    subCategory = 'American history',
    numberOfEdits = '100';

    var Links = require('./model/links');
    var link = new Links(id1, id2);
    console.log(link);

    var Article = require('./model/article');
    var article = new Article(id, title, category, subCategory);
    console.log(article);

    var Protection = require('./model/protection');
    var protection = new Protection(id, start, end);
    console.log(protection);

    var Edit = require('./model/edit');
    var edit = new Edit(id, date, numberOfEdits);
    console.log(edit);
}

