var assert = require('assert');
var unique = require('./off/unique/');
var pack = require('./off/pack/');
var flatten = require('./off/flatten/');
var union = require('./off/union/');
var subset = require('./off/subset/');


// SPARSE
var sparse = [, , 1, 2, , , 3, , ];
// 2-D
var d2 = [[1, 10], [2, 20], [3, 30]];
// NESTED
var nested = [[1, 2], [3, 4], [5, [6, 7, [8]]], 9];
// DUPLICATED
var dupe = [1, 1, 2, 3, 4, 3, 1, 1, 2];

// SET A:
let seta = ["a", "x", "y", "w"];
// SET B:
let setb = ["b", "x", "z", "w"];
// SET C:
let setc = ["c", "x", "y", "z"];



describe('Arrays', function () {

    describe('unique', function () {
        it('should return new unique array', function () {
            assert.deepEqual(unique([1, 1, 2, 3, 4, 3, 1, 1, 2]), [1, 2, 3, 4]);
        });
    });

    describe('pack', function () {
        it('should return new packed array', function () {
            assert.deepEqual(pack(sparse), [1, 2, 3]);
        });
    });

    describe('flatten', function () {
        it('should return new flatten array', function () {
            assert.deepEqual(flatten([[1, 2], [3, 4]]), [1,2,3,4]);
        });

        it('should return new flatten array2', function () {
            assert.deepEqual(flatten([[[]]]), []);
        });

        it('should return new flatten array3', function () {
            assert.deepEqual(flatten([5, [6, 7, [8]]]), [5,6,7,8]);
        });

    });

});


describe('needle in haystack', function () {

    describe('array in array', function () {
        it('should return true', function () {
            assert(subset([1, 2], [1, 2, 3, 4]), true);
        });

    });

    describe('string in array', function () {
        it('substring in array', function () {
            assert(subset("g", ["g", "g", "t", "y"]), true);
        });

        it('substrings in array', function () {
            assert(subset("sg", ["s", "g", "t", "y"]), true);
        });

    });


});



describe('Venn diagrams', function () {

    describe('union', function () {
        it('should return union of arrays', function () {
            assert.deepEqual(union(seta, setb), ["a", "b", "w", "x", "y", "z"]);
        });
    });

});


// difference: A Δ B   {cdefg}
// var a = ["a", "b", "c", "d", "e"];
// var b = ["a", "b", "f", "g"];
// var d = diff(a, b);
// console.log('d: ', d);



/*
describe('hooks', function () {

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
    });

    afterEach(function () {
        // runs after each test in this block
    });

    // test cases
});
*/

// difference: A Δ B   {cdefg}
// let a = ["a", "b", "c", "d", "e"];
// let b = ["a", "b", "f", "g"];
// let d = diff(a, b);
// console.log('d: ', d);
