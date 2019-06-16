// SAMPLE DATA
'use strict';
var samples = samples || {} ;

// ARRAYS
samples.arrays = [
    [1, 2, 3, [4, 5, [6, 7, 8]]],
    [[1, 2], [3, [4, 5, [6, 7, 8]]]],
    [[1, 2], [3, 4], [5, 6], [7, 8]],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [, , 3, 4, , , 5, , 5],
    [, 3, ,3, 4, 3, , 5, 3, 5],
    [],
    [[]],
    [[[]]],
];
samples.array.plain = [1, 2, 3, 4, 5];
samples.array.sparse = [, , 3, 4, , , 5, , 5];
samples.array.paireded = [[1, 10], [2, 20], [3, 30]];
samples.array.nested = [[1, 2], [3, 4], [5, [6, 7, [8]]], 9];
samples.array.dupes = [1, 1, 2, 3, 4, 3, 1, 1, 2];



// FUNCTIONS
samples.fxEmpty = (() => void 0);
samples.fxId = ((x) => x);

// NUMERIC
samples.numeric = [
    42,
    -11,
    3.14,
    -4.54,
    "0",
    -0,
    0,
    NaN,
    Infinity,
    -Infinity,
    2 ** 32,
    2 ** 32 - 1,
    2 ** 32 - 2,
    2 ** 52,
    2 ** 52 - 1,
    2 ** 52 - 2,
];

// COMMON VALUES
samples.common = [
    undefined,
    null,
    false,
    true,
    "",
    "null",
    NaN,
    Infinity,
    -Infinity,
    0,
    -0,
    22,
    -4.54,
    void 0,
];


// SETS
samples.set = {};

samples.set.a = ["a", "x", "y", "w"];
samples.set.b = ["b", "x", "z", "w"];
samples.set.c = ["c", "x", "y", "z"];



// OBJECTS
samples.pojo = {};

samples.pojo.plain = {
    0: 0,
    1: 1,
    2: 2,
}

samples.pojo.nested = {
    a: "one",
    b: "two",
    arr: [1, 2, 3],
    c: {
        0: 0,
        1: 1,
        2: 2
    }
};

console.log(samples.pojo.nested);



var keys = Symbol['keys'];

samples.pojo.complex = {
    0: 'zero',
    num: 1,
    arr: [1, 2, 3],
    [keys](){ return Reflect.ownKeys(this); },
    get len() { return this.arr.length; },
};
//console.log(samples.pojo.complex);

var sym = Symbol('sample');

samples.pojo.complex[sym] = "value of symbol";

Object.defineProperty(samples.pojo.complex, 'def', {
    value       : "definition",
    enumerable  : true,
    writable    : true,
    configurable: true
});

samples.pojo.complex[Symbol.iterator] = function () {
    let k = Object.keys(this),
        i = 0;
    return {
        next: function () {
            return {
                value: k[i],
                 done: i++ <= k.length
            };
        }
    }
};

console.log(samples.pojo.complex);


// objects: inhrtitance
samples.pojo.papa = {
    name: 'papa',
    job : 'plumber',
};

samples.pojo.sonny = {
    name : "sonny",
    color: "gray",
    age  : 71,
};

Object.setPrototypeOf(samples.pojo.sonny, samples.pojo.papa);
Object.setPrototypeOf(samples.pojo.obj, samples.pojo.sonny);


if (typeof module !== undefined) module.exports = samples;
