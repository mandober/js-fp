'use strict';
const assert = require('chai').assert;
const flattend = require('./');


var a = [ 1, [2, [3, [4, [5, [6, [7]]]]]] ];
flattend(a); //?
flattend(a, 1); //?
flattend(a, 2); //?
flattend(a, 3); //?
flattend(a, 4); //?
flattend(a, 5); //?
flattend(a, 6); //?

var b = [[[6]]];
// flattend(b); //?
// flattend(b, 6); //?
// flattend(b, 5); //?
// flattend(b, 4); //?
// flattend(b, 3); //?
flattend(b, 2); //?
// flattend(b, 1); //?


describe('Array flattening', function () {

    var samples = [
        {
            id: "nested1",
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
            expected: [3, 4, 5, 5],
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

    samples.forEach(function (test) {
        it(`${test.id}`, function () {
            let actual = flatten(test.actual);
            let expected = test.expected;
            assert.deepEqual(actual, expected);
        });
    });

});
