'use strict';
const assert = require('chai').assert;
const flatten = require('./');


describe('flatten', function () {
    var tests = [
        [1, 2, 3, [4, 5, [6, 7, 8]]],
        [[1, 2], [3, [4, 5, [6, 7, 8]]]],
        [ [1, 2], [3, 4], [5, 6], [7, 8] ]
    ];

    var expected = [1, 2, 3, 4, 5, 6, 7, 8];

    tests.forEach(function (test) {
        it(`flattens arrays`, function () {
            var actual = flatten(test);
            assert.deepEqual(actual, expected);
        });
    });
});
