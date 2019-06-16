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





// solutions
function part(fn, ...now) {
    // check if fn is a fn
    if (typeof fn === "function") {
        var argc = getArity(fn); //?
    } else {
        return new Error("First arg must be a function");
    }

    function inn(...now) {
        // check if there is enough args collected
        return (argc <= now.length)
            ? fn(...now)
            : (...later) => inn(...now, ...later);
    }
    inn(...now);
}

var sum = (a, b, c) => a + b + c;
var maths = (fn, x, y, z) => fn(x, y, z);

part(sum, 4, 2, 3); //?

var add = part(sum, 3); //?
add(2, 5); //?

part(sum)(4, 2, 3); //?
part(sum, 3)(2, 5); //?
part(sum, 3, 2)(6); //?
part(sum)(3)(2)(7); //?










// solutions
var partl =
    (fn, ...present) =>
        (...laters) =>
            fn(...present, ...laters);


var sum = (a, b, c) => a + b + c;

var maths = (fn, x, y, z) => fn(x, y, z);

maths(sum, 3, 2, 3, 5); //?

