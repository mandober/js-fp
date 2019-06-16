'use strict';
const assert = require('assert');
const ran = require('../../modules/util-random');

var x = ran(1,10);

describe('random', function () {
    it('random numbers', function () {
        assert(needle, heystack);
    });

});


/*
String.fromCharCode(65, 66, 67);  // "ABC"
ASCII "a-z" = 97 - 122
a = 97
e = 101
i = 105
o = 111
u = 117

Off.random(10) // 1-10
Off.random(0, 10) // 0-10
Off.random(10, 22) // 10-22
Off.random(97, 0, 26) // 97-122
*/