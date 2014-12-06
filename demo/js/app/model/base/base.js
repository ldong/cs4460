define(function() {
    function Base () {}
    Base.prototype.toString = function () {
        return "Hi, this is called from base";
    };

    return Base;
})
