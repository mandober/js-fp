'use strict';
const id = require('./');
const assert = require('chai').assert;

describe('id', function () {

    it(`id(undefined)`, function () {
        let actual = id(undefined);
        let expected = "undefined";
        assert.equal(actual, expected);
    });

    it(`id(void 0)`, function () {
        let actual = id(void 0);
        let expected = "undefined";
        assert.equal(actual, expected);
    });

    it(`id([])`, function () {
        let a = [];
        let actual = id(a);
        let expected = "array";
        assert.equal(actual, expected);
    });

    it(`id("")`, function () {
        let a = "";
        let actual = id(a);
        let expected = "string";
        assert.equal(actual, expected);
    });

    it(`id(false)`, function () {
        let a = false;
        let actual = id(a);
        let expected = "boolean";
        assert.equal(actual, expected);
    });

    it(`id(Symbol('a sym'))`, function () {
        let a = Symbol('a sym');
        let actual = id(a);
        let expected = "symbol";
        assert.equal(actual, expected);
    });

    it(`id({})`, function () {
        let a = {};
        let actual = id(a);
        let expected = "pojo";
        assert.equal(actual, expected);
    });

    it(`id(Object(undefined))`, function () {
        let a = Object(undefined);
        let actual = id(a);
        let expected = "pojo";
        assert.equal(actual, expected);
    });

    it(`id(123)`, function () {
        let a = 123;
        let actual = id(a);
        let expected = "int";
        assert.equal(actual, expected);
    });

    it(`id(-123)`, function () {
        let a = -123;
        let actual = id(a);
        let expected = "int";
        assert.equal(actual, expected);
    });

    it(`id(-12.3)`, function () {
        let a = -12.3;
        let actual = id(a);
        let expected = "float";
        assert.equal(actual, expected);
    });

}); // end describe



// numbers
id(NaN); /*?*/
id(Infinity); /*?*/
id(0); /*?*/
id(1); /*?*/
id("6"); /*?*/
id(+new String(42)); /*?*/
id(new Number(42)); /*?*/

