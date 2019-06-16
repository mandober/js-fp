const diff = function (a, b) {
    let diff_a = [...new Set(a.filter(el => !(b.includes(el))))];
    let diff_b = [...new Set(b.filter(el => !(a.includes(el))))];
    return diff_a.concat(diff_b).sort();
};

if (typeof module !== "undefined") module.exports = diff;

