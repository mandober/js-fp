'use strict';
//! kestrel
//? Constant function maker or "K combinator" or "Kestrel"
// kestrel is a constant function maker.
// constant function always return the same value.
const kestrel = (x) => (y) => x;


if (typeof module !== "undefined") module.exports = kestrel;
