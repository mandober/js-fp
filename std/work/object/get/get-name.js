function getName(obj) {
    'use strict';

    // only functions have a proper name
    if (typeof obj === "function") return obj.name;

    // objects that implement Symbol.toStringTag
    if (obj[Symbol.toStringTag]) return Object.prototype.toStringTag.call(obj);
    // builtin prototypes have derived name from their constructor functions
    if (typeof obj === "object") {
        if (obj.constructor.name) return obj.constructor.name + '.prototype';
    }

    // the rest? literal objects, arrays...
    return Object.prototype.toString.call(obj).slice(8, -1);


}


if (typeof module !== undefined) module.exports = getName;


/*
only functions have a proper name, but avoid user prop `name`
"[object Function]"
"[object GeneratorFunction]"


*/


// In order to return anything usable from a (non builtin) object
// use: get[Symbol.toStringTag]() { return 'my' }
