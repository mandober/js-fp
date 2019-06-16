'use strict';
const getArity = require('../getArity/');


//! partialRight()
// partially applies params from the right
// This implementation of partialRight() does not guarantee that a specific parameter will receive a specific partially-applied value; it only ensures that the right-partially applied value(s) appear as the right-most argument(s)passed to the original function.
const partialRight =
    (fn, ...presetArgs) =>
        reverseArgs(
            partial(reverseArgs(fn), ...presetArgs.reverse())
        );
