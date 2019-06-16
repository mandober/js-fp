'use strict';
const subset = require("./subset");
const assert = require('assert');

var heystack = {
    a: 1,
    b: 2,
    c: 3
}
var needle = {
    a: 1,
    b: 2
}

describe('subset', function () {
    it('sees if needle is subset of haystack', function () {
        assert(subset(needle, heystack));
    });

});