const union = require('../union');
const concatAll = require('../concat-all');

const intersection = function (...args) {
    console.log(args);

    var len = args.length; /*?*/

    var a = args[0]; /*?*/
    var b = args[1]; /*?*/
    var c = args[2]; /*?*/

    var u = concatAll(args); /*?*/

    var o = u.reduce((acc, el, i) => {
        console.log('acc: ', acc);
        console.log(`el[${i}]: ${el}`);
        (el in acc) ? acc[el]++ : acc[el] = 1;
        return acc;
    }, {}); /*?*/
    o


    return o.filter(el => el === len);
};




if (typeof module !== "undefined") module.exports = intersection;



// intersection A - B
var a = ["a", "x", "y", "w"];
var b = ["b", "x", "z", "w"];
var c = ["c", "x", "y", "z"];

// var i = intersection(a, b); /*?*/
// var i = intersection(c, b); /*?*/
// var i = intersection(c, a); /*?*/

var i = intersection(a, b, c); /*?*/


// const intersection = function (a, b) {
//     return [...new Set(a.filter(el => b.includes(el)))].sort();
// };
