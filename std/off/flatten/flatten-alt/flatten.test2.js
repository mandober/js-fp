'use strict';
const assert = require('chai').assert;
const flatten = require('./');

var samples = [
    {
        id : "nested1",
        actual: [1, 2, 3, [4, 5, [6]]],
        expected: [1, 2, 3, 4, 5, 6],
    },
    {
        id: "nested2",
        actual: [[1, 2], [3, [4, 5, [6, 7]]]],
        expected: [1, 2, 3, 4, 5, 6, 7],
    },
    {
        id: "nested3",
        actual: [[[1, 2]], [[3], 4, [5], 6], 7],
        expected: [1, 2, 3, 4, 5, 6, 7],
    },
    {
        id: "linked",
        actual: [1, [2, [3, [4, [5, [6, [7]]]]]]],
        expected: [1, 2, 3, 4, 5, 6, 7],
    },
    {
        id: "pairs",
        actual: [[1, 2], [3, 4], [5, 6]],
        expected: [1, 2, 3, 4, 5, 6],
    },
    {
        id: "empty",
        actual: [],
        expected: [],
    },
    {
        id: "empty2",
        actual: [[]],
        expected: [],
    },
    {
        id: "sparse1",
        actual: [[null, undefined, 3], 4, [void 0, 0, false,], [5, undefined], 5],
        expected: [null, undefined, 3, 4, undefined, 0, false, 5, undefined, 5],
    },
    {
        id: "sparse2",
        actual: [[, , 3], 4, [, , ,], [5,], 5],
        expected: [3,4,5,5],
    },
    {
        id: "integer",
        actual: 123,
        expected: 123,
    },
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


describe('Array flattening', function () {
    samples.forEach(function (test) {
        it(`${test.id}`, function () {
            let actual = flatten(test.actual);
            let expected = test.expected;
            assert.deepEqual(actual, expected);
        });
    });
});
