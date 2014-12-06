define(function() {
    var modelBase;
    modelBase = function(title) {
        this.title = title;
    };
    modelBase.prototype = {
        getTitle: function() {
            return this.title;
        }
    };
    return modelBase;
})
