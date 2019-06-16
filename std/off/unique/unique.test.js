var assert = require('assert');
var unique = require('./index');
var samples = require('../../../samples');


describe('Array', function () {

    describe('Make array unique', function () {
        it('should return return new unique array', function () {
            assert.deepEqual(unique(samples.dupe), [1,2,3,4]);
        });
    });

});

