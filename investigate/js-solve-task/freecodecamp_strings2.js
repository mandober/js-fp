// freecodecamp
// https://www.freecodecamp.com/challenges/truncate-a-string

/*
Truncate a string (first argument)
- if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3,
then the addition of the three dots does not add to
the string length in determining the truncated string.
*/
function truncateString(str, num) {
    var strLen = str.length;
    var newString;
    if (strLen > num && num > 3) {
        return str.slice(0, num-3)+ '...';
    } else if (strLen > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

// test
truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-tisket a-tasket A green and yellow basket", 44);
truncateString("A-tisket a-tasket A green and yellow basket", 46);


/*
https://www.freecodecamp.com/challenges/chunky-monkey

Write a function that splits an array (first argument) into groups the length
of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    var len = arr.length; // 4
    var chunks = Math.ceil(size / len); // 2
    var out = [];
    for (let index = 0; index < len; index = index + size) {
        //console.log('slice', index, chunks, arr.slice(index, size + index));
        out.push(arr.slice(index, size + index)); // 0,2  2,4  4,6
    }
    return out;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2); // ([["a", "b"], ["c", "d"]]t.
chunkArrayInGroups([1,2,3,4,5,6], 2); // ([["a", "b"], ["c", "d"]]t.




/*
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
*/
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr;
}

slasher([1, 2, 3], 2);