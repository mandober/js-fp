var assert = require('assert');
var unique = require('./array/unique/');
var samples = require('../../samples');


describe('Arrays', function () {

    describe('array: unique', function () {
        it('should return return new unique array', function () {
            assert.deepEqual(unique(samples.dupe), [1, 2, 3, 4]);
        });
    });

});




let a = ["a", "b", "c"];
let b = [1, 2, 3];
let c = ["c", "x", "y", "z"];

var arg = (...args) => args;
console.log(arg(a, b));
console.log(arg(a));
console.log(arg(a, b, 11, 2));
console.log(arg(1));

var args = ([...a]) => a;
console.log( args(a) );
console.log( args(b) );
