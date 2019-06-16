var assert = require('assert');


describe('Arrays', function () {

    describe('unique', function () {
        it('should return new unique array', function () {
            assert.deepEqual(unique(dupe), [1, 2, 3, 4]);
        });
    });

    describe('pack', function () {
        it('should return new packed array', function () {
            assert.deepEqual(pack(sparse), [1, 2, 3]);
        });
    });

    describe('flatten', function () {
        it('should return new flatten array', function () {
            assert.deepEqual(flatten(nested), [1,2,3,4,5,6,7,8,9]);
        });
    });

});


describe('Venn diagrams', function () {

    describe('union', function () {
        it('should return union of arrays', function () {
            assert.deepEqual(union(seta, setb), ["a", "b", "w", "x", "y", "z"]);
        });
    });

    describe('pack', function () {
        it('should return new packed array', function () {
            assert.deepEqual(pack(sparse), [1, 2, 3]);
        });
    });

    describe('flatten', function () {
        it('should return new flatten array', function () {
            assert.deepEqual(flatten(nested), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
    });

});

