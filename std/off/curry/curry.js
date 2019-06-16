//! curry()
//* looser variant
const curry = (fn, arity = fn.length) =>
    (nextCurried = (prevArgs) =>
        (...nextArgs) => {
            var args = prevArgs.concat(nextArgs);
            return (args.length >= arity)
                ? fn(...args)
                : nextCurried(args);
        }
    )([]);


if (typeof module !== undefined) module.exports = curry;


