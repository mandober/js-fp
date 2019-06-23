/**
 * Compose
 *
 * Compose (multiple) functions.
 *
 */

// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
const compose = (...fns) => (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
