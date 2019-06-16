/**
 *
 *
 * @param {any} start
 * @param {any} end
 * @param {any} range
 *
 */
function randomTag(start, end, range) {
    var vowels = [97, 101, 105, 111, 117], // range 0-5 (5)
        arr = [],
        char,
        offset = offset || 97, // ASCII "a" = 97 -> random 97-122
        range = range || 26, // ASCII "a-z" = random (26)
        ord = ((Math.floor(Math.random() * 100)) % range + 1) + offset; // 1) 0-1 -> 2) 0-100

    ord = ord % 27; // 3) 0-26
    ord = ord + 97; // 4) 97-122
    console.log(ord);
    char = String.fromCharCode(ord);
    console.log(char);
    if (!vowels.includes(ord)) arr.push(ord);

}





if (typeof module !== undefined) module.exports = fingerprint;
