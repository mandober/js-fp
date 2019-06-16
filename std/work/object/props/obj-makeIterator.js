'use strict';

let makeIterator = require('./object/make-iterator');


var sf = Symbol['big obj symbol'];
var bigObj = {
    // primitives
    bool: true,
    str: "a string",
    pi: 3.14,
    nill: null,
    undef: undefined,
    sym: Symbol['big symbol'],
    [sf]: "secret symbol",
    // objects
    arr: [5, 10, 15],
    obj: {
        level: "bigObj lvl.2",
        verbosity: 5
    },
    today: new Date(),
    re: /.*?/,
    // functions
    [Symbol.toStringTag]() { return "ok object" },
    getId: function () {
        return this[Symbol.toStringTag]();
    },
    getName: function () {
        return "My name is a number";
    },

    [Symbol.iterator]() {
        return new makeIterator(Object.keys(bigObj));
    }

    // [Symbol.iterator]() {
    //     let keys = Object.keys(this),
    //         i = 0;
    //     return {
    //         next: function () {
    //             return {
    //                 value: keys[i],
    //                 done: i++ >= keys.length
    //             }
    //         }
    //     };
    // }
};


for (let k of bigObj) {
    console.log(k);
}


// var flatten = require('./flatten');
// var arrA = ["a", ["b", "c"], "d", "e"];
// var arrB = [["a", "b"], [["f"], "g"]];
// var arrC = [1, 2.42, "a dog", [3, 'a cat'], true];
// var arrD = [1, [2, 3, [4, 5], 6, 7], 8, 9, [10, 11, [12]]];
// console.log('in:', arrA, 'out:', flatten(arrA));
// console.log('in:', arrB, 'out:', flatten(arrB));
// console.log('in:', arrC, 'out:', flatten(arrC));
// console.log('in:', arrD, 'out:', flatten(arrD));

