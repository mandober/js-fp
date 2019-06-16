// usage
var ok = {
    debug: true,
    levels: [5, 10, 15],
    [Symbol.toStringTag]() { return "ok object" },
    log: {
        info: true,
        verbosity: 3,
        target: "syslog"
    },
    [Symbol.iterator]() {
        let keys = Object.keys(this),
            i = 0;
        return {
            next: function () {
                return {
                    value: keys[i],
                    done: i++ >= keys.length
                }
            }
        };
    },
    getId: function () {
        return this[Symbol.toStringTag]();
    },
    getName: function () {
        return "My name is a number";
    }
};


const crypto = require('crypto');
var output = crypto.createHash('md5').update(finger(ok)).digest("hex");
console.log('output: ', output);

console.log('getName: ', ok.getName);
