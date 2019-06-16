'use strict';
// const getParams = require("@jsbx/get-params");
const getParams = require("../get-params");


const getArity = function(fn) {
    'use strict';
    return getParams(fn).length;
}


//* ================ EXPORT ================
if (typeof module !== "undefined") module.exports = getArity;


function f4(a, b = 22, ...c) { }
getArity(f4); //?

