// The pattern is admittedly ugly, but is both AMD and CommonJS compatible, 
// as well as supporting the old- style “global” variable definition:

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    //    methods
    function myFunc() { };

    //    exposed public method
    return myFunc;
}));


// And keeping in the same pattern as the above examples, the more complicated 
// case with multiple dependencies and multiple exposed methods:

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //    methods
    function a() { };    //    private because it's not returned (see below)
    function b() { };    //    public because it's returned
    function c() { };    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
}));
