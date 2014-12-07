define(function(require){
    var Model = require('./base/base');
    function Protection (id, start, end) {
        this.id = id;
        this.start = start;
        this.end = end;
    }
    Protection.prototype = new Model;

    return Protection;
});
