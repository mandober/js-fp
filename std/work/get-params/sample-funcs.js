
// function declarations:
function fn1(a) {}

function fn2 (a, b, c, d) {}

function fn3(
    a,
    b,
    c,
    d
) {}

// function expressions:
var f1 = function (a, ...b){}
let f2 = function (a = 10, ...b) { }
(function fn3(a, b, c, d) {})();





function fn2(a, ...b) { return [a, b]; }
function* fn3(a, ...b) { yield a; }





var a1 = a => a;
var a2 = (a) => a;
var a3 = (a, b) => a + b;
var a4 = (a, ...b) => [a, b];
var a5 = ([a, b, c]) => [a, b, c];

const a6 = (a = 3, b, ...c) => [a, b, c];
const a7 = ({ x = 1, y = 2, z = x + 3 } = {}) => [x, y, z];
let a8 = (f, { x = 1, y = 2, z = x + 3 } = {}, ...r) => [f, x, y, z, r];
let a9 = ([a, [b, c]] = [2, [3, 4]]) => [a, b, c];

function fn1(a, b) { return [a, b]; }
function fn2(a, ...b) { return [a, b]; }
function* fn3(a, ...b) { yield a; }

var fn4 = function fn4(a = 4, ...b) { return [a, b]; }
var fn5 = function (a = 4, b = a, ...c) { return [a, b]; }
