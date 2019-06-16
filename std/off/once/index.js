//! once
// ensures that a function can only be called, well, once.Hereâ€™s the recipe:
const once = (fn) => {
    let done = false;

    return function () {
        return done ? void 0 : ((done = true), fn.apply(this, arguments))
    }
};

if (typeof module !== undefined) module.exports = once;
