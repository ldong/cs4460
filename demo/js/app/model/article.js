define(function(require){
    var Model = require('./base/base');
    function Article(id, title, category, subCategory, links, edits, protections){
        this.id = id;
        this.title = title;
        this.category = category;
        this.subCategory = subCategory;
        this.links = links;
        this.edits = edits;
        this.protections = protections;
    }
    Article.prototype = new Model;
    return Article;
});
