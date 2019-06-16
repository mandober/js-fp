'use strict';

const get = {

    //! ------------------- type -------------------
    toString(x) {
        return Object.prototype.toString.call(x).slice(8, -1).toLowerCase();
    },

    //! ------------------- arrays -------------------

    // Return the first element of an array.
    first(arr) {
        // var [f, ...rest] = arr.filter(el => el);
        var [f, ...rest] = [...arr];
        return f;
    },

    // Return all, but the first element of an array.
    tail([...arr]) {
        var [f, ...rest] = arr.filter(el => el);
        return rest;
    },

    // Return the last element of an array.
    last([...arr]) {
        var [...rest] = arr.filter(el => el);
        for (var el in rest) {}
        return rest[el];
    },

    // Return all, but the last element of an array.
    head([...arr]) {
        var [...rest] = arr.filter(el => el);
        var len = rest.length - 1;
        var narr = [];
        for (var i = 0; i < len; i++) {
            narr.push(rest[i]);
        }
        return narr;
    },


}; // end get



//* ================ ALIASES ================
get.tos = get.tostr = get.toString;


//* ================ EXPORT =================
if (typeof module !== "undefined") module.exports = get;
