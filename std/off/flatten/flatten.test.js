'use strict';
const flatten = require('./');
const assert = require('assert');

describe('Array flattening', function () {

    var samples = [
        {
            id: "nested1",
            actual: flatten([1, 2, 3, [4, 5, [6]]]),
            expected: [1, 2, 3, 4, 5, 6],
        },
        {
            id: "nested2",
            actual: flatten([[1, 2], [3, [4, 5, [6, 7]]]]),
            expected: [1, 2, 3, 4, 5, 6, 7],
        },
        {
            id: "nested3",
            actual: flatten([[[1, 2]], [[3], 4, [5], 6], 7]),
            expected: [1, 2, 3, 4, 5, 6, 7],
        },
        {
            id: "linked",
            actual: flatten([1, [2, [3, [4, [5, [6, [7]]]]]]]),
            expected: [1, 2, 3, 4, 5, 6, 7],
        },
        {
            id: "linked1",
            actual: flatten([1, [2, [3, [4, [5, [6, [7]]]]]]], 1),
            expected: [1, 2, [3, [4, [5, [6, [7]]]]]],
        },
        {
            id: "linked2",
            actual: flatten([1, [2, [3, [4, [5, [6, [7]]]]]]], 2),
            expected: [1, 2, 3, [4, [5, [6, [7]]]]],
        },
        {
            id: "linked3",
            actual: flatten([1, [2, [3, [4, [5, [6, [7]]]]]]], 3),
            expected: [1, 2, 3, 4, [5, [6, [7]]]],
        },
        {
            id: "linked4",
            actual: flatten([1, [2, [3, [4, [5, [6, [7]]]]]]], 4),
            expected: [1, 2, 3, 4, 5, [6, [7]]],
        },
        {
            id: "linked5",
            actual: flatten([1, [2, [3, [4, [5, [6, [7]]]]]]], 5),
            expected: [1, 2, 3, 4, 5, 6, [7]],
        },
        {
            id: "linked6",
            actual: flatten([1, [2, [3, [4, [5, [6, [7]]]]]]], 6),
            expected: [1, 2, 3, 4, 5, 6, 7],
        },
        {
            id: "pairs",
            actual: flatten([[1, 2], [3, 4], [5, 6]]),
            expected: [1, 2, 3, 4, 5, 6],
        },
        {
            id: "pairs1",
            actual: flatten([ [[1, 2]], [[3, 4]], [[5, 6]] ], 1),
            expected: [[1, 2], [3, 4], [5, 6]],
        },
        {
            id: "empty",
            actual: flatten([]),
            expected: [],
        },
        {
            id: "empty2",
            actual: flatten([[]]),
            expected: [],
        },
        {
            id: "sparse1",
            actual: flatten([[null, undefined, 3], 4, [void 0, 0, false,], [5, undefined], 5]),
            expected: [null, undefined, 3, 4, undefined, 0, false, 5, undefined, 5],
        },
        {
            id: "sparse2",
            actual: flatten([[, , 3], 4, [, , ,], [5,], 5]),
            expected: [3, 4, 5, 5],
        },
        {
            id: "integer",
            actual: 123,
            expected: 123,
        },
        {
            id: "string",
            actual: flatten("abcd"),
            expected: "abcd",
        },
        {
            id: "pojo",
            actual: flatten({ a: 1 }),
            expected: { a: 1 },
        },
        {
            id: "empty pojo",
            actual: flatten({}),
            expected: {},
        },

    ];

    samples.forEach(function (test) {
        it(`${test.id}`, function () {
            let actual = test.actual;
            let expected = test.expected;
            assert.deepEqual(actual, expected);
        });
    });

});
