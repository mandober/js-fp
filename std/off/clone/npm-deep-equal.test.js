// node's deepEqual
// https://nodejs.org/dist/latest-v7.x/docs/api/assert.html
// Only enumerable "own" properties are considered, it doesn't test
// object prototypes, attached symbols, or non-enumerable properties.
// Primitive values are compared with the loose comparison operator (==).
var equal = require('deep-equal');

var a = {
     a: [2, 3, 4, [5, 6, 7]],
     b: [4],
     c: function () { return 42; }
};
var b = {
    a: [2, 3, 4, [5, 6, 7]],
    b: [4],
    c: function () { return 42; }
}
console.dir(equal(a, b));

var c = {
    x: 5,
    y: [6]
};
var d = {
    x: 5,
    y: 6
}
//console.dir(equal(c,d));
