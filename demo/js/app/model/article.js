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
    Article.prototype.toString = function(){
        return 'Article id: '+ this.id + ' title: ' + this.title
        +  ' category: '+ this.category + ' subCategory: '
        + this.subCategory + ' links: '+ this.links + ' edits: '
        + this.edits + ' protections: '+ this.protections;
    }
    return Article;
});
