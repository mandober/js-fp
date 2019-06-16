// goal: define a function (foldWith) that will take some params
// and a function (visitor) and apply it to all elements of array

// first, examine a function (sumSquares) that accepts
// an array and returns the sum of its values squared:

// sumSquares
var sumSquares = ([first, ...rest]) => (first === undefined) ? 0 : first * first + sumSquares(rest);
// sumSquares usage
sumSquares([1, 2, 3, 4, 5]) /*?*/
//=> 55


// now, let's define generalized function (foldWith) for walking the array


// foldWith
var foldWith = (visitor, terminator, [first, ...rest]) =>
    (first === undefined) ? terminator : visitor( first, foldWith(visitor, terminator, rest) );

// use foldWith to square all elements and then sum them
var visitor = (first, rest) => first * first + rest;
var terminator = 0;
var ray = [1, 2, 3, 4, 5];
foldWith(visitor, terminator, ray) /*?*/
//=> 55



// flatten array:
var flat = ([first, ...rest]) => {
    return (first === undefined)
        ? []
        : (!Array.isArray(first))
            ? [first, ...flat(rest)]
            : [...flat(first), ...flat(rest)];
}

// use foldWith to flatten array:
var visitor = (first, rest) => (!Array.isArray(first)) ? [first, ...rest] : [...first, ...rest];
var terminator = [];
var arr = [1, [2, 3], [4, 5]];
foldWith(visitor, terminator, arr) /*?*/

