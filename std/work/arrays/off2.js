/*
Off - custom object faking a namespace and housing all the functions.
Some methods are directly on `Off`, others are grouped in sub-namespaces.

Off         top namespace
Off.array   array methods
Off.pojo    objects related methods
Off.util    misc methods

var Off = function(off) {
    'use strict';
    var off = off || {};
    off.meta = {
        version: "0.0.17",
        revisioned: "2017-06-08",
        author: "Ilic Ivan <ilicivan@zoho.com>"
    }
    return off;
}(Off || {});

if (typeof module !== undefined) module.exports = Off;
*/

(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Off = factory();
    }
}(this, function () {
    'use strict';
    var Off = Off || {};
    Off.meta = {
        version: "0.0.17",
        revisioned: "2017-06-08",
        author: "Ilic Ivan <ilicivan@zoho.com>"
    };
    // Off.array = {};
    // if (typeof module !== 'undefined') Off.array = require ('./off.array');
    return Off;
}));
