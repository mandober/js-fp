const unique = require('../unique');
const flatten = require('../flatten');

var union = (...args) => unique(flatten(args).sort());


if (typeof module !== "undefined") module.exports = union;


var union2 = (a, b) => [...new Set(a.concat(b))].sort();


var union3 = function (args){
        let u = [];
        for (let el of a.concat(b)) {
            if (!u.includes(el)) u.push(el);
        }
        return u;
}

// union A ∪ B = ["a", "b", "c", "d", "e", "f", "g"];
var a = ["a", "b", "c", "d", "e"];
var b = ["a", "b", "f", "g"];
var uu = union3(a, b);
console.log(uu);


/*
var union = (...args) => {
    var u = a.concat(b);
    var uniq = [];
    for (let el of a) {
        if (!uniq.includes(el)) uniq.push(el);
    }
    return uniq;
}
*/
