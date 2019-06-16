//! maybe
// ensures that a function does nothing if given nothing (like null or undefined) as an argument.

const maybe = (fn) =>
    function (...args) {
        if (args.length === 0) return;

        for (let arg of args) {
            if (arg == null) return;
        }
        return fn.apply(this, args);
    };


if (typeof module !== undefined) module.exports = maybe;

