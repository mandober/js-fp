'use strict';
/**
 * Rotate an array, string or number.
 *
 * @param    {array<*>|string|number}  x  Input array
 * @param    {number}  spin  Rotate direction (negative int rotates to the right) and number of rotations.
 * @returns  {array<*>|string|number}    Rotated array.
 */
function rotate(arr, spin = -1) {
    let num = Math.abs(spin),
        out = [...arr];
    if (num === 0) return out;

    // spin to right >>>
    if (Math.sign(spin) < 0) {
        for (let i = 0; i <= num; ++i) {
            out.unshift(out.pop());
        }
    // spin to left <<<
    } else {
        for (let i = 0; i <= num; ++i) {
            out.push(out.shift());
        }
    }
    return out;
};

if (typeof module !== "undefined") module.exports = rotate;



function rotate(array, n) {
    var copy = array.slice(0),
        i,
        pull,
        push;

    if (n !== 0) {
        n || (n = 1);
        if (n > 0) {
            pull = 'shift';
            push = 'push';
        }
        else {
            n = -n;
            pull = 'pop';
            push = 'unshift'
        }
        for (i = 0; i < n; ++i) {
            copy[push](copy[pull]());
        }
    }
    return copy;
};
