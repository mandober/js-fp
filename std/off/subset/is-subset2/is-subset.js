/*
 * is-subset.js
 *
 * subtypes:
 * - string:str, (num:num)
 * - array:*
 * - object:bool|str|num|arr|obj
 *
 */


/**
 * Find if an object (haystack) contains exact key/value pair(s) as another object (needle)
 *
 * @example shallowCompare({a:1,b:2}, {a:1,b:2,c:3}) // true
 *
 */
off.obj.shallowCompare = function (needle, haystack) {
    let needleProps = Object.getOwnPropertyNames(needle), // ["a", "b"]
        haystackProps = Object.getOwnPropertyNames(haystack), // ["a", "b", "c", "d"]
        matchesGoal = needleProps.length,
        matches = 0;
    for (let p = 0; p < needleProps.length; ++p) {
        for (let n = 0; n < needleProps.length; ++n) {
            // first compare keys and if they match, compare their values
            if (needleProps[p] === haystackProps[n] && needle[needleProps[p]] === haystack[haystackProps[n]]) {
                matches++;
                break;
            }
        }
    }
    if (matches === matchesGoal) return true;
    return false;
};
