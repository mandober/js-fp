'use strict';

var cloneDeep = require("./objects-clone-deep");

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
        let keys = Object.keys(this),
            i = 0;
        return {
            next: function () {
                return {
                    value: keys[i],
                    done: i++ >= keys.length
                }
            }
        };
    }
};

var dest = {};
cloneDeep(bigObj, dest);
console.log('dest:', dest);

