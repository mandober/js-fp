/**
 * Collapse multi-dimensional array by a dimension.
 *
 * @param    {array<*>}  arr  Multi dimensional array.
 * @returns  {array<*>}       New, collapsed, array.
 */
const concatAll = arr => arr.reduce((acc, el) => acc.concat(el), []);


if (typeof module !== "undefined") module.exports = concatAll;
