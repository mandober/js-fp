/**
 * Deep-copies properties (key/value pairs) from one object to another.
 * The builtin utility `Object.assign()` copies properties, but it does it in a
 * a shallow manner: only 1st level properties are copied; properties containing
 * (nested) objects are only copied by reference.
 *
 * @param {object}  source  Object to copy properties from.
 * @param {object}  target  Object to copy properties to.
 * @returns {object}  Target (destination) object.
 */
function clone(source = {}, target = {}) {
    // iterate by each prop of source object
    for (let i in source) {
        // consider prop only if own prop of source
        if (source.hasOwnProperty(i)) {
            // determine if current prop is a primitive or nested object:
            // if prop value is an object
            if (typeof source[i] === "object") {
                // if prop value is array, current prop of target obj is initiated as an empty array
                // if prop value is object, current prop of target obj is initiated as an empty object
                target[i] = (Array.isArray(source[i])) ? [] : {};
                // recursevly call this func with current level (of nesting) as args
                clone(source[i], target[i]);

            // if prop value is a primitive, just copy the value.
            // if prop value is a function, it will be copied by reference
            } else {
                target[i] = source[i];
            }
        }
    }
    return target;
};


if (typeof module !== "undefined") module.exports = clone;

