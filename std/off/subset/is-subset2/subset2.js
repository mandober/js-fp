// subset
var aa = ["hello", "leelooh"];
var a1 = aa[0].toLowerCase().split('');
var b1 = aa[1].toLowerCase().split('');
var sec = Off.intersection(a1, b1);
var hits = 0,
    hitsGoal = b1.length;

for (var index = 0; index < b1.length; index++) {
    var element = b1[index];
}

function mutation(arr) {
    var haystack = arr[0].toLowerCase().split('');
    var needle = arr[1].toLowerCase().split('');
    haystack = [...new Set(haystack)].sort();
    needle = [...new Set(needle)].sort();

    var needleProps = Object.values(needle), // ["a", "b"]
        haystackProps = Object.values(haystack), // ["a", "b", "c", "d"]
        matchesGoal = needleProps.length,
        matches = 0;
    console.log('haystackProps: ', haystackProps);
    console.log('needleProps: ', needleProps);
    console.log('matchesGoal: ', matchesGoal);

    for (var p = 0; p < needleProps.length; ++p) {
        for (var n = 0; n < needleProps.length; ++n) {
            // first compare keys and if they match, compare their values
            if (needleProps[p] === haystackProps[n] && needle[needleProps[p]] === haystack[haystackProps[n]]) {
                matches++;
                break;
            }
        }
    }
    if (matches === matchesGoal) return true;
    return false;
}

mutation(["Alien", "line"]);
