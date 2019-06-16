// const unique = require('../unique');
// const flatten = require('../flatten');

var union = (...args) => {
    console.log('args: ', args);
}


Set.prototype.union = function (setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}


if (typeof module !== "undefined") module.exports = union;



var a = ["a", "x", "y", "w"];
var b = ["b", "x", "z", "w"];
var c = ["c", "x", "y", "z"];
a = new Set(a); /*?*/
b = new Set(b); /*?*/
c = new Set(c); /*?*/

var u = union(a,b,c); /*?*/

var aa = [...a]; /*?*/
aa = a.values(); /*?*/

for (let item of a) console.log(item);

for (let [key, value] of a.entries()) console.log(key);




/*
var union2 = (a, b) => [...new Set(a.concat(b))].sort();

var union3 = function (args){
        let u = [];
        for (let el of a.concat(b)) {
            if (!u.includes(el)) u.push(el);
        }
        return u;
}
*/

// union A ∪ B = ["a", "b", "c", "d", "e", "f", "g"];
// var a = ["a", "b", "c", "d", "e"];
// var b = ["a", "b", "f", "g"];
// var uu = union3(a, b);
// console.log(uu);


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
