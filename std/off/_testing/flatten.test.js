'use strict';

// node:
//const assert = require('assert');
//assert.deepStrictEqual(actual, expected[, message])

// chai + assert:
//const chai = require('chai');
const assert = require('chai').assert;

const flatten = require('./');

// data
// var expected = [1, 2, 3, 4, 5, 6, 7];
// var arr1 = [1, 2, 3, [4, 5, [6, 7]]];
// var actual = flatten(arr1);

// describe('Array flatten', function () {
//     describe('flatten()', function () {
//         it('should return flat aray', function () {
//             assert.deepEqual(actual, expected);
//         });
//     });
// });


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
