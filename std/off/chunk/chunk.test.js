//! arrayChunk(array, [size = 2])
// Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.
// Returns the new array of chunks.

function chunk(arr, size=2) {
    var len = arr.length; // 4
    var chunks = Math.ceil(size / len); // 2
    var out = [];
    for (let index = 0; index < len; index = index + size) {
        //console.log('slice', index, chunks, arr.slice(index, size + index));
        out.push(arr.slice(index, size + index)); // 0,2  2,4  4,6
    }
    return out;
}

chunk(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]
