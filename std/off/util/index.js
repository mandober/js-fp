'use strict';

const util = {

    //! ------------------- log -------------------
    log(m) {
        var logs = require('../log');
        logs(m);
    },

}; // end util



//* ================ ALIASES ================



//* ================ EXPORT =================
if (typeof module !== "undefined") module.exports = util;
