/**
 * See if all properties (key-value pairs) of needle object are present in the haystack object;
 * haystack object can contain additional properties, but for this method to return `true`, it
 * must contain, at least, all properties of the needle object.
 *
 * @param    {object}   needle    Object.
 * @param    {object}   haystack  Object to compare to.
 * @returns  {boolean}  Returns `true` if all properties of needle are found in haystack object.
 */
function subset(needle, haystack) {
    let needleProps = Object.getOwnPropertyNames(needle),
        haystackProps = Object.getOwnPropertyNames(haystack),
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

module.exports = subset;
