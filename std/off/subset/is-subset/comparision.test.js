'use strict';

var symbolLocal = Symbol('Local symbol');
var symbolGlobal = Symbol.for('Global symbol.for');
var big = {
    // primitives
    boolean: true,
    string: "a string",
    number: 3.14,
    nill: null,
    undef: undefined,
    // symbols
    [symbolLocal]: 'local symbol',
    [symbolGlobal]: 'global symbol',
    // array
    arr: [5, 10, 15],
    // objects
    obj: {
        level: "level 2",
        verbosity: 5
    },
    // date
    today: new Date(),
    // regexp
    re: /.*?/,
    // functions
    [Symbol.toStringTag]() { return "ok object" },
    getId: function () {
        return this[Symbol.toStringTag]();
    },
    setName: function (x, y) {
        return `${x} is my ${y} name`;
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

// console.log('big fucking object:', big);

var small = {
    [symbolLocal]: 'localos',
    [symbolGlobal]: 'globalos'
}

const assert = require('assert');

// Object.getOwnPropertySymbols(big);
// console.log('Object.getOwnPropertySymbols(big: ', Object.getOwnPropertySymbols(big));

assert.deepEqual(big, big);


var in1 = {
    number: 31,
    arr: [5, 10, 15],
    obj: {
        level: "level 2",
        verbosity: 5
    }
}

var out1 = {
    number: 31,
    arr: [5, 10, 15],
    obj: {
        level: "level 2",
        verbosity: 5
    }
}

assert.deepEqual(in1, out1, "in1 != out1");

describe('deep obj equality', function () {
    it('says if 2 objects are deep equal', function () {
        assert.deepEqual(in1, out1, "in1 != out1");
    });

    it('says if 2 objects are deep equal', function () {
        assert.deepEqual(big, big, "big != big");
    });

});