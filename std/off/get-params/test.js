'use strict';
const assert = require('assert');
const getParams = require ("./");


describe('Get function parameters', function () {

    it(`simple parameters`, function () {
        let f = (a, b, c) => { };
        let actual = getParams(f);
        let expected = ['a', 'b', 'c'];
        assert.deepEqual(actual, expected);
    });

    it(`parameters with default values`, function () {
        let f = (a=5, b=6, c=a) => { };
        let actual = getParams(f);
        let expected = ['a', 'b', 'c'];
        assert.deepEqual(actual, expected);
    });

    it(`parameter with spread operator`, function () {
        let f = (a, b = 6, ...c) => { };
        let actual = getParams(f);
        let expected = ['a', 'b', 'c'];
        assert.deepEqual(actual, expected);
    });

    it(`deals with comments and whitespace`, function () {
        let f = function (    /*comment7*/  x, /*comment6*/
            /* comment1*/   y = 3,//comment5
            ...z) { // comment
            ((k, l) => k + l)(); // comment
            /*comment2 */ var a = 12; // comment
            var b = 33; // comment3
        }
        let actual = getParams(f);
        let expected = ['x', 'y', 'z'];
        assert.deepEqual(actual, expected);
    });

    it(`simple object destructuring`, function () {
        let f = ({ a, b, c }) => { };
        let actual = getParams(f);
        let expected = ['a', 'b', 'c'];
        assert.deepEqual(actual, expected);
    });

    it(`simple array destructuring`, function () {
        let f = ([a, b, c]) => { };
        let actual = getParams(f);
        let expected = ['a', 'b', 'c'];
        assert.deepEqual(actual, expected);
    });

    it(`object destructuring + default object`, function () {
        let f = ({ a, b, c } = { a:1, b:2, c:3 }) => { };
        let actual = getParams(f);
        let expected = ['a', 'b', 'c'];
        assert.deepEqual(actual, expected);
    });

    it(`object destructuring + default object + aliases`, function () {
        let f = ({ x:a, y: b, z:c } = { x:1, y:2, z:3 }) => { };
        let actual = getParams(f);
        let expected = ['a', 'b', 'c'];
        assert.deepEqual(actual, expected);
    });

    it(`object destructuring + default object + aliases + default values`, function () {
        let f = ({ x:a = 5, y: b = 6, z: c } = { x: 1, y: 2, z: 3 }) => { };
        let actual = getParams(f);
        let expected = ['a', 'b', 'c'];
        assert.deepEqual(actual, expected);
    });


}); // end describe
