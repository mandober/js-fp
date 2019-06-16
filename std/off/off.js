'use strict';

var off = {
    meta: {
        version: "0.0.17",
        updated: "2017-07-23",
        author: "Ilic Ivan <ilicivan@zoho.com>"
    }
};

off.is = require('./is');
off.get = require('./get');
off.util = require('./util');


//* ================ EXPORT =================
if (typeof module !== "undefined") module.exports = off;


// console.log(off);
// var off = require('./off');
