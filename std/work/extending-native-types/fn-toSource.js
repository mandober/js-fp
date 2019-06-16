//? get source of a fn in order to detirmine args
// fn.toSource() works in browser, but not in node
// fn.toString() works!

function fn(a, b) {
    return a +b;
}

var args = fn.toString()
.replace(/^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/, "$1$2$3")
.split(/\s*,\s*/)
.map(v => v.replace(/[=\s].*$/, ""));

console.log(args); /*?*/




//* TEST FNs with regexp:
/*
function fn1(a, b) {}
 function fn1 *(a, b) {}
function fn1 * (a, b) {}
   function fn1* (a, b) {}
var fun2 = function fn2(a, b, ...c) { };
    var fn3 = function (a, b, ...c) { };
var fn3 = function (a, b, ...c) { };
const fn3 = function (a, b, ...c) { };
        const fn3 = *(a, b) => a + b;
function fn1({ a = 1, b = 3 } = {}) { }
fn3 = ({ a = 1, b = 3 } = {}) => a + b;
const foo = function* (a, b) {}
*/
