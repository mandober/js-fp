var MakeIterator = require('../');
var test = require('tape');
var assert = require('assert');

test('MakeIterator', function (t) {
    var obj = {
        a: 11,
        b: 22,
        c: 33,
        [Symbol.iterator]() {
            return new MakeIterator(Object.keys(obj));
        }
    };



});
