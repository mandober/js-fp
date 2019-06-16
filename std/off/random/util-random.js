/**
 * Get random number
 * @param {number} start  Starting range.
 * @param {number} end    Ending range.
 *
 */
function random(start, end, range) {
    // range = end - start + 1;
    // return (((Math.floor(Math.random() * end)) + 1) % range);
    return (Math.floor(Math.random() * end)) + 1; // 1-10
}


Math.random() // 0-1 e.g. 0.4485177652933655
Math.random() * end // 0-100 e.g. 94.20290841833734
Math.floor(Math.random() * end)// 0-99
Math.floor(Math.random() * end) + 1 // 1-100


if (typeof module !== undefined) module.exports = fingerprint;

// var x = ran(1, 10); 0-9 (inc)
