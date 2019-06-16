/**
 * Unary
 * Function decorator that takes any function and turns
 * it into a function that takes exactly one argument.
 *
 * @param {Function}  fn  Function with bigger arity than one.
 * @returns {Function}  Unary function.
 */
const unary = (fn) =>
    // if function's arity is 1 or 0
    fn.length <= 1
    // just return it
    ? fn
    // otherwise
    : (arg) => fn(arg);
    // : function (args) {
    //     return fn.call(this, args)
    // };

if (typeof module !== undefined) module.exports = unary;


var unary2 =
    fn =>
        arg =>
            fn(arg);
