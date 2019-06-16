/**
 * Off - custom object to house all utilities.
 */

const MDLNAME = "Off";

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
        
        
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.MDLNAME = factory();
    }
}(this, function() {
    var MDLNAME = MDLNAME || {};
    MDLNAME.meta = {
        version: "0.0.18",
        revisioned: "2017-07-03",
        author: "Ilic Ivan <ilicivan@zoho.com>"
    };
    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return MDLNAME;
}));
