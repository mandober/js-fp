'use strict';

var get = {
    version: "0.0.1.170603",

    type(x) {
        const getType = require('./');
        return getType(x);
    },
};

if (typeof module !== undefined) module.exports = get;