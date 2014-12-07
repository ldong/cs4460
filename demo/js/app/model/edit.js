define(function(require){
    var Model = require('./base/base');
    function Edits (id, date, numberOfEdits) {
        this.id = id;
        this.date = date;
        this.numberOfEdits = numberOfEdits;
    }
    Edits.prototype = new Model;

    return Edits;
});
