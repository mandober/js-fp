'use strict';

// const test = require('tape');
const assert = require('assert');
const chprop = require('./chmod-define-properties');

var s = {};
chprop(s, "prop-000-0", "e:0 w:0 c:0", 0)
chprop(s, "prop-001-1", "e:0 w:0 c:1", 1)
chprop(s, "prop-010-2", "e:0 w:1 c:0", 2)
chprop(s, "prop-100-4", "e:1 w:0 c:0", 4)
chprop(s, "prop-011-3", "e:0 w:1 c:1", 3)
chprop(s, "prop-101-5", "e:1 w:0 c:1", 5)
chprop(s, "prop-110-6", "e:1 w:1 c:0", 6)
chprop(s, "prop-111-7", "e:1 w:1 c:1", 7)

var actual = Object.getOwnPropertyDescriptors(s);

// console.log('s: ', actual);

var expected = {
    'prop-000-0':
    {
        value: 'e:0 w:0 c:0',
        writable: false,
        enumerable: false,
        configurable: false
    },
    'prop-001-1':
    {
        value: 'e:0 w:0 c:1',
        writable: false,
        enumerable: false,
        configurable: true
    },
    'prop-010-2':
    {
        value: 'e:0 w:1 c:0',
        writable: true,
        enumerable: false,
        configurable: false
    },
    'prop-100-4':
    {
        value: 'e:1 w:0 c:0',
        writable: false,
        enumerable: true,
        configurable: false
    },
    'prop-011-3':
    {
        value: 'e:0 w:1 c:1',
        writable: true,
        enumerable: false,
        configurable: true
    },
    'prop-101-5':
    {
        value: 'e:1 w:0 c:1',
        writable: false,
        enumerable: true,
        configurable: true
    },
    'prop-110-6':
    {
        value: 'e:1 w:1 c:0',
        writable: true,
        enumerable: true,
        configurable: false
    },
    'prop-111-7':
    {
        value: 'e:1 w:1 c:1',
        writable: true,
        enumerable: true,
        configurable: true
    }
}

describe('def prop', function () {

    it('defines properties', function () {
        assert.deepEqual(actual, expected);
    });

});