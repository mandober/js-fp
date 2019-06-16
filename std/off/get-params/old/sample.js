
// ok - verified!
const complex1 = function (a = 5, /* a arg */  b, /* par b */   c = 4, // b end line
    d, // y comment
  /* laster */  ...e) {
    // inside fn
}

// ok - verified!
let complex2 = ({ x: a = 5 + 6, b = 5 * 9 % a } = {}) => { };






// ok
function sf1(a, b) { }
let sf2 = function (a, b) { }
let sf3 = function sf3(a, b) { }
var g1 = a => { };
var g2 = (a) => { };
var g3 = (a, b) => { };
function f2(a, ...b) { }
function f3(a = 1, b, c = 5) { }
function f4(a = 1, b, ...c) { }
var fn1 = a => { };
var fn2 = (a, b, c) => { };
function fn4(a) { }  //?
function fn5(a, b, c, d) { }
getParams(fn6); //?
var fn7 = function (a, ...b) { }
let fn8 = function (a = 10, ...b) { }
let fn9 = function* (a = 10, b = 5) { }
const f10 = function f10(a, b, c, d) { };
const f11 = ([a, b, c]) => { };
const f12 = (x, y = 3, ...z) => { };
const f13 = ({ x = 1, y = 2, z = x + 3 } = {}) => [x, y, z];
const f14 = (f, { x = 1, y = 2, z = x + 3 } = {}, ...r) => [f, x, y, z, r];
const sf4 = function (
    a,
    b)
{ }
