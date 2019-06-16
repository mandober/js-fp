var assert = require('assert');
var subset = require('./index');

/*
var heap = [1, 2, 3, 4];
var a = [2, 3];
subset(a, heap)
var b = [8, 9];
subset(b, heap);
var c = 2;
subset(c,heap);
*/



describe('needle in haystack', function () {

    describe('subarray in array', function () {
        it('should return true', function () {
            assert(subset([1, 2], [1, 2, 3, 4]), true);
        });

        it('subarray not in array', function () {
            assert(subset([9, 8], [1, 2, 3, 4]), false);
        });

    });

});
