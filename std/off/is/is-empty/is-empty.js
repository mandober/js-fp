// falsey: null, undefined, "", NaN, false, 0
// empty: undefined, NaN, "", null, /?:/, [], {}, (() => )

/**
 * Check if value is empty.
 * Empty values:
 *  1) undefined
 *  2) null
 *  3) string: "" (check length)
 *  4) number: NaN (, Infinity?)
 *  5) array: [] (check length = 0)
 *  6) pojo: {} (check own props = 0)
 *  7) map: check size = 0
 *  8) set: check size = 0
 */
const isEmpty = function (x) {


}


if (typeof module !== undefined) module.exports = isEmpty;
