'use strict';

function range(start=0, end=20, step=1, prefix, suffix, wrap) {
    let arr = [];
    if (start === end) return start;
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            // push string
            if (prefix || suffix || wrap) {
                let p = (prefix) ? String(prefix) : '';
                let s = (suffix) ? String(suffix) : '';
                let w = (wrap) ? String(wrap) : '';
                let res = w + p + i + s + w;
                arr.push(res);
                // push number
            } else {
                arr.push(i);
            }
        }
    }
    if (start > end) {
        for (let i = start; i >= end; i -= step) {
            arr.push(i);
        }
    }
    return arr;
};


if (typeof module !== undefined) module.exports = range;
