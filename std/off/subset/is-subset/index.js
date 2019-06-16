// array (set) subset

if (typeof module !== "undefined") module.exports = subset;

function subset(needle, haystack) { // needle in haystack
    console.log(haystack);
    console.log(needle);

    // 1)
    // if (typeof needle !== "object" || typeof needle !== "function") needle = [needle];
    // 2)
    if (!Array.isArray(needle)) {
        needle = [...needle];
        console.log(needle);
    }

    var goal = needle.length; /*?*/
    var matches = 0;

    for (var n of needle) {
        if (haystack.includes(n)) matches++; /*?*/
    }

    return goal === matches; /*?*/
}

var hay = ["a", "b", "c", "d"];
subset(["a", "b"], hay); /*?*/
subset(["b"], hay); /*?*/
subset(["b", "a"], hay); /*?*/




// strings
subset("b", hay); /*?*/
subset("ba", "abc"); /*?*/


/*
haystack = string, array, map, set, object
needle = primitive, array, map, set, object

- (sub)array in array [ok]

- primitive in array
- object in object
- primitive in object
- array in object


1. haystack: string -> needle: substring (string or number as string)
   eg: 9 in "Road M9" -> "9" in "Road M9"
       "sub" in "substring"

2. haystack: array

*/
