/*
Off - custom object faking a namespace and housing all the functions.
Some methods are directly on `Off`, others are grouped in sub-namespaces.

Off         top namespace
Off.array   array methods
Off.pojo    objects related methods
Off.util    misc methods
*/

/*
    (function (root, factory) {
        'use strict';
        if (typeof define === 'function' && define.amd) {
            define([], factory);
        } else if (typeof module === 'object' && module.exports) {
            module.exports = factory();
        } else {
            root.Off.array = factory();
        }
    }(this, function () {
        'use strict';
        Off.array = Off.array || {};
        Off.array.pack = (arr) => arr.filter(el => el);
        //if (typeof module !== 'undefined') Off.array = require('./off.array');
        return Off;
    }));

*/


var Off = function(off) {
    'use strict';
    // meta
    var off = off || {};
    off.array.methods = "head,peak,tail,last,collapseOne,concatAll,pack,rotate,flatten".split(',');

    // methods
    off.array.flatten = (arr) => (Array.isArray(arr)) ? arr.reduce((acc, el) => acc.concat(flatten(el)), []) : arr;
    off.array.concatAll = (arr) => arr.reduce((acc, el) => acc.concat(el), []);
    off.array.head = (arr) => { for (let el in arr) return arr[el]; };
    off.array.pack = (arr) => arr.filter(el => el);

    off.array.union = (a, b) => [...new Set(a.concat(b))].sort();
    off.array.intersection = (a, b) => [...new Set(a.filter(el => b.includes(el)))].sort();
    off.array.complement = (a, b) => a.filter(el => !b.includes(el));


     off.array.tail = function (arr) {
        var last = require('./tail/');
        return last(arr);
    };

    off.array.rotate = function (arr) {
        var rotate = require('./rotate/');
        return rotate(arr);
    };

    // end
    return off;
}(Off || {});


if (typeof module !== "undefined") module.exports = Off;
