//! nary function
var nary = function (fn, ary = 1) {
    return function (...args) {
        if (args.length < ary) return new Error("Not enough arguments provided");
        let argv = args.slice(0, ary);
        return fn(...argv);
    }
};


// usage
var f = (x=0, y=0, z=0, w=0, q=0) => x + y + z + w +q;

var unary = nary(f); //?
unary(5); //?
unary(5, 6); //?
unary(5, 8, 9); //?
unary(); //?

var binary = nary(f,2); //?
binary(2, 3); //?
binary(2, 3, 9); //?
binary(2); //?
binary(); //?

var ternary = nary(f,3)
ternary(5, 3, 2); //?
ternary(5, 3); //?
ternary(3); //?
ternary(); //?
