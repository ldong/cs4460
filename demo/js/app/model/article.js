define(function(require){
    var Model = require('./base/base');
    function Article(id, title, category, subCategory) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.subCategory = subCategory;
    }

    Article.prototype = new Model;

    return Article;
});
