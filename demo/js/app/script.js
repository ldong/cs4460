define(['papaparse', 'Q', './generators/generateAll'], function(Papa, Q){
    // var map0 = require('./app/generators/generateLinks');
    // var map1 = require(['./app/generators/generateEdits']);
    // var map2 = require(['./app/generators/generateArtricle']);
    // var map3 = require(['./app/generators/generateProtection']);
    // var map0 = require(['./app/generators/generateLinks']);

    var init = require('./app/generators/generateAll');
    /* csv data are now stored in these
       window.links
       window.edits
       window.article
       window.protection
       console.log(window.links);
       console.log(window.edits);
       console.log(window.article);
       console.log(window.protection);
     */
    init({
        data: {'world': 'hello'},
        logics: function(){
            console.log("overloaded?");
            console.log('window.models '+ window.models);
        }
    }).papa();
});

// function a(){
//     var id = 0,
//     id1 = 1,
//     id2 = 2,
//     date = new Date(),
//     start = new Date()
//     end = new Date(),
//     title = 'title is here',
//     category = 'history',
//     subCategory = 'American history',
//     numberOfEdits = '100';
//
//     var Links = require('./model/links');
//     var link = new Links(id1, id2);
//     console.log(link);
//
//     var Article = require('./model/article');
//     var article = new Article(id, title, category, subCategory);
//     console.log(article);
//
//     var Protection = require('./model/protection');
//     var protection = new Protection(id, start, end);
//     console.log(protection);
//
//     var Edit = require('./model/edit');
//     var edit = new Edit(id, date, numberOfEdits);
//     console.log(edit);
// }
