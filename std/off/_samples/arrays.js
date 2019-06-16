// SAMPLE DATA
'use strict';


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
    }
];

module.exports = sample_raw;
