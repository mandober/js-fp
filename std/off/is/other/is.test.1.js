'use strict';

const is = require('./');
const assert = require('chai').assert;

var samples = [
    {
        id: "string",
        actual: "abcd",
        expected: "abcd",
    },
    {
        id: "pojo",
        actual: { a: 1 },
        expected: { a: 1 },
    },
    {
        id: "empty pojo",
        actual: {},
        expected: {},
    },
];


describe('is', function () {

//* =============================== OBJECTS ===================================


describe('is', function () {
    samples.forEach(function (test) {
        it(`${test.id}`, function () {
            let actual = is.undef(test.actual());
            //let expected = test.expected;
            assert.equal(actual, false);
        });
    });
});


//* ========================= is.void() =========================
describe('is.void()', function () {

    it(`is.undef(): declared, but uninitilized`, function () {
        let actual;
        assert.equal(is.undef(actual), true);
    });

    it(`is.undef()`, function () {
        assert.equal(is.undef(), true);
    });

    it(`is.undef(undefined)`, function () {
        let actual = undefined;
        assert.equal(is.void(actual), true);
    });

    it(`is.undef("undefined")`, function () {
        let actual = "undefined";
        assert.equal(is.u(actual), false);
    });

    it(`is.undef(void 0)`, function () {
        let actual = void 0;
        assert.equal(is.void(actual), true);
    });

    it(`is.undef(null)`, function () {
        let actual = null;
        assert.equal(is.u(actual), false);
    });

}); // end describe



/*

describe('is', function () {
    it(`undefined`, function () {
        let actual = is.object(undefined);
        assert.equal(actual, false);
    });

    it(`string`, function () {
        let actual = is.string("undefined");
        assert.equal(actual, true);
    });
});


describe('primitives', function () {
    it('undefined', () => assert(is.primitive(undefined), true));
    it('empty params', () => assert(is.primitive(), true));
    it('void 0', () => assert(is.primitive(void 0), true));
    it('false', () => assert(is.primitive(false), true));
    it('""', () => assert(is.primitive(""), true));
    it('NaN', () => assert(is.primitive(NaN), true));
    it('null', () => assert(is.primitive(null), true));
    it('-Infinity', () => assert(is.primitive(-Infinity), true));
    it('Infinity', () => assert(is.primitive(Infinity), true));
    it('{}', () => assert(is.primitive({}), false));
});

describe('empty', function () {
    it('undefined', () => assert(is.empty(undefined), true));
    it('empty params', () => assert(is.empty(), true));
    it('void 0', () => assert(is.empty(void 0), true));
    it('NaN', () => assert(is.empty(NaN), true));
    it('""', () => assert(is.empty(""), true));
    it('{}', () => assert(is.empty({}), true));
    it('[]', () => assert(is.empty([]), true));
    it('null', () => assert(is.empty(null), true));
    it('false', () => assert(is.empty(false), false));
    it('0', () => assert(is.empty(0), false));
    it('false is false', () => assert(false, false));
});
*/




/*
is.empty(undefined);
is.empty(null);
is.empty(NaN);
is.empty("");
is.empty([]);
is.empty({});
is.empty(0);
is.empty(false);
is.empty(33);
is.empty([[]]);
is.empty({ 0: 0 });

// primitives
is.primitive(undefined);
is.primitive(null);
is.primitive(false);
is.primitive("");
is.primitive(NaN);
is.primitive(Infinity);
is.primitive(-Infinity);
is.primitive([]);
is.primitive({});
is.primitive(0);
is.primitive(33);
is.primitive([[]]);
is.primitive({ 0: 0 });

is.pojo({ a: 1 });
is.pojo({});

console.log('is.falsy(null): ', is.falsy(null));
console.log('is.falsy(undefined): ', is.falsy(undefined));
console.log('is.falsy(): ', is.falsy());
console.log('is.falsy(""): ', is.falsy(""));
console.log('is.falsy("\\b"): ', is.falsy("\b"));
console.log('is.falsy(" \\b"): ', is.falsy(" \b"));
console.log('is.falsy("\\e"): ', is.falsy("\e"));
console.log('is.falsy("\'\\b"): ', is.falsy("\"\b"));
console.log('is.falsy(0): ', is.falsy(0));
console.log('is.falsy(NaN): ', is.falsy(NaN));
console.log('is.falsy(false): ', is.falsy(false));
console.log('is.truthy({}): ', is.truthy({}));
console.log('is.truthy([]): ', is.truthy([]));
console.log('is.truthy(0.00000000000000000000000001): ', is.truthy(0.00000000000000000000000001));
console.log('is.truthy(true): ', is.truthy(true));
console.log('is.truthy("1 > 2 > 3"): ', is.truthy(1>2>3));
console.log('is.integerIndex(2**32): ', is.integerIndex(2**32));
console.log('is.integerIndex(2**32-1): ', is.integerIndex(2**32-1));
console.log('is.integerIndex(2**32-2): ', is.integerIndex(2**32-2));
console.log('is.arrayIndex(2**32-2): ', is.arrayIndex(2 ** 32 - 2));
console.log('is.arrayIndex(2**32): ', is.arrayIndex(2 ** 32));
console.log('is.integerIndex(0.): ', is.integerIndex(0.));
console.log('is.integerIndex(0xab): \n\n', is.integerIndex(0xab));
console.log(2**1024, Object.is(Infinity, 2**1024));
console.log('is.array([1,2,3,4]): ', is.array([1,2,3,4]));
console.log('is.array([1]): ', is.array([1]));
console.log('is.array("str"): ', is.array("str"));
console.log('is.array(""): ', is.array(""));
console.log('is.emptyArray(""): ', is.emptyArray(""));
console.log('is.emptyArray([]): ', is.emptyArray([]));
console.log('is.emptyArray([[]]): ', is.emptyArray([[]]));
console.log('is.emptyArray({}): ', is.emptyArray({}));
console.log('is.emptyArray([0]): ', is.emptyArray([1]));
console.log('is.emptyPojo({}):', is.emptyPojo({}));
console.log('is.emptyPojo([]):', is.emptyPojo([]));
console.log('is.emptyPojo([[]]):', is.emptyPojo([[]]));
console.log('is.emptyPojo({1:1}):', is.emptyPojo({1:1}));

*/
