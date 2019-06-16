'use strict';
const getArity = require('../get-arity/');


//! partial()
/**
 * partial()
 * Takes a function passed in as the first parameter and returns a
 * new function, based on current function, but with lowered arity.
 *
 * @deps     {function}  getArity()
 * @param    {function}  fn  A function.
 * @param    {any}       now   (some) of its parameters.
 * @returns  {function}  The function with reduced arity.
 */
function partial(fn, ...now) {
    // check if fn is a fn
    if (typeof fn === "function") {
        var argc = getArity(fn);
    } else {
        return new Error("First arg must be a function");
    }

    // check if there is enough args collected
    if (argc <= now.length) {
        return fn(...now);
    } else {
        return function (...later) {
            return partial(fn, ...now, ...later)
        }
    }
}

if (typeof module !== undefined) module.exports = partial;





var partial_v3 = (fn, ...now) =>
    (...later) =>
        fn(...now, ...later);


var partial_v2 = function(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}


var partial_es5_v1 = function(fn) {
    var fixed = [].slice.apply(arguments, [1]);
    return function () {
        var args = fixed.concat([].slice.apply(arguments));
        return fn.apply(this, args);
    };
}
