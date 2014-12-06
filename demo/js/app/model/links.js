define(function(require){
    var Model = require('./base/base');
    function Links (id, linksTo) {
        this.id = id;
        this.linksTo = linksTo;
    }
    Links.prototype = new Model;

    return Links;
});
