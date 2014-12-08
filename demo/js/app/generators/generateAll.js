define(['papaparse','underscore', '../model/article'], function(Papa, _){
    var func = function(str){
        console.log("HELLO WORLD "+str);
    };

    var paseData = function(){
        function getNumberOfMonth(str){
            var index = 0;
            if(str){
                var strs = str.split('/');
                var month = parseInt(strs[0]);
                var year = parseInt(strs[2].substring(2,4)) - 5;
                index = year * 12 + month;
            }
            return index;
        }

        // console.log('Start parse');
        var Article = require('./app/model/article');
        var links = {};
        for(var i=1; i<window.links.length; ++i){
            var id1 = parseInt(window.links[i][0]);
            var id2 = parseInt(window.links[i][1]);
            if(id1 && id2){
                if(links[id1]){
                    links[id1].push(id2);
                } else {
                    var linksArr = [id2];
                    links[id1] = linksArr;
                }
            } else {
                // console.log('index ' +i);
            }
        }
        // console.log('links');
        // console.log(links);

        var edits = {};
        for(var i=1; i<window.edits.length; ++i){
            var id = parseInt(window.edits[i][0]);
            var strs = window.edits[i][1].split('/');
            var month = parseInt(strs[0]);
            var year = parseInt(strs[1].substring(2,4)) - 5;
            var index = year * 12 + month;
            var numberOfEdits = parseInt(window.edits[i][2]);
            var arr = [];
            if(edits[id]){
                arr = edits[id];
            }
            arr[index] = numberOfEdits || 0;
            edits[id] = arr;
        }
        // console.log('edits');
        // console.log(edits);

        var protections = {};
        for(var i=1; i<window.protection.length; ++i){
            var id = parseInt(window.protection[i][0]);
            var str1 = window.protection[i][1];
            var str2 = window.protection[i][2];
            var diff = getNumberOfMonth(str2)-getNumberOfMonth(str1)+1;
            var arr = [];
            if(protections[id]){
                arr = protections[id];
            }
            for(var j=0; j<diff; ++j){
                arr[index+j] = 1;
            }
            protections[id] = arr;
        }
        // console.log('protections');
        // console.log(protections);


        var categoryHash = {};
        var models = []; // to be returned
        for(var i=1; i<window.article.length; ++i){
            var id = window.article[i][0] || '0';
            var title = window.article[i][1] || 'default title';
            var category = window.article[i][2] || 'default category';
            var subCategory = window.article[i][3] || 'default subCategory';
            id = parseInt(id);
            var aLinks = links[id] = [];
            var aEdits = edits[id] || [];
            var aProtections = protections[id] || [];
            var article = new Article(id, title, category, subCategory, aLinks, aEdits, aProtections);
            models.push(article);

            var subCategoryList = [];
            if(categoryHash[category]){
                subCategoryList = categoryHash[category];
                if(!_.contains(subCategoryList, subCategory)){
                    subCategoryList.push(subCategory);
                }
            } else {
                subCategoryList.push(subCategory);
                categoryHash[category]= subCategoryList;
            }
        }
        window.models = models;
        window.category = categoryHash;
        // console.log('models');
        // console.log(models);
        console.log('End parse');
    }

    var module = {
        // papa: Papa
        papa: function(){
            Papa.parse("http://localhost:8080/data/links.csv", {
            config:{
                "header" : true
            },
            download: true,
            complete: function(results) {
                window.links = results.data;
                Papa.parse('http://localhost:8080/data/edits.csv', {
                    config:{
                        "header" : true
                    },
                    download: true,
                    complete: function(results) {
                        window.edits = results.data;
                        Papa.parse('http://localhost:8080/data/protection.csv', {
                            config:{
                                "header" : true
                            },
                            download: true,
                            complete: function(results) {
                                window.protection = results.data;
                                Papa.parse('http://localhost:8080/data/article.csv', {
                                    config:{
                                    "header" : true
                                    },
                                    download: true,
                                    complete: function(results) {
                                        window.article = results.data;
                                        console.log("before");
                                        paseData();
                                        func();
                                        console.log("after");
                                    }
                                }); // end of article
                            }
                        }); // end of protection
                    }
                }); // end of edits
            }
        })// end of links
        }
    }
    var init = function (options) {
        // Initialize here
        if(options){
            func = options.logics;
        }
        return module;
    };

    return init;
});
