'use strict';
const parseParams = require ("./");

// SIMPLE
function sf1(a, b) { }
getParams(sf1); //?

 let sf2 = function(a, b) { }
getParams(sf2); //?

let  sf3 = function sf3 (a, b) { }
getParams(sf3); //?

const sf4 = function(
    a,
    b)
{ }
getParams(sf4); //?


var g1 = a => { };
getParams(g1); //?

var g2 = (a) => { };
getParams(g2); //?

var g3 = (a, b) => { };
getParams(g3); //?



// spread
function f2 (a, ...b){}
getParams(f2); //?

// default args
function f3(a=1, b, c=5) { }
getParams(f3); //?

// spread + default args
function f4(a = 1, b, ...c) { }
getParams(f4); //?



// arrow
var fn1 = a => {};
getParams(fn1); //?
//=> ['a']

var fn2 = (a, b, c) => {};
getParams(fn2); //?
//=> ['a', 'b', 'c']

function fn4(a) { }  //?
getParams(fn4); //?
//=> ['a']

function fn5(a, b, c, d) { }
getParams(fn5); //?
//=> ['a', 'b', 'c', 'd']

function fn6(
    a,
    b,
    c,
    d
) { }
getParams(fn6); //?
//=> ['a', 'b', 'c', 'd']


var fn7 = function (a, ...b) { }
getParams(fn7); //?
//=> ['a', 'b']

let fn8 = function (a = 10, ...b) { }
getParams(fn8); //?
//=> ['a', 'b']

let fn9 = function *(a = 10, b = 5) { }
getParams(fn9); //?
//=> ['a', 'b']

const f10 = function f10(a, b, c, d) { };
getParams(f10); //?
//=> ['a', 'b', 'c', 'd']


const f11 = ([a, b, c]) => {};
getParams(f11); //?
//=> [['a', 'b', 'c', 'd']]

const f12 = (x, y = 3, ...z) => {};
getParams(f12); //?
//=> ['x', 'y', 'z']



const f13 = ({ x = 1, y = 2, z = x + 3 } = {}) => [x, y, z];
getParams(f13); //?
//=> ['x', 'y', 'z']

const f14 = (f, { x = 1, y = 2, z = x + 3 } = {}, ...r) => [f, x, y, z, r];
getParams(f14); //?
//=> ['f', 'x', 'y', 'z', 'r']


// TEST
const f = ({ x: a, y: b, z: c } = { x: 22, y: 33, z: 44 }) => { };
var p2 = pp(f);



const no1 = ({ x: a, y: b, z: c } = { x: 22, y: 33, z: 44 }) => { };
const no2 = ({ x: a = 1, y: b = 2, z: c = 3 } = { x: 22, y: 33, z: 44 }) => { };

// nested
const no3 = ([a, [b, c]] = [2, [3, 4]]) => { };
const no4 = ([a, [b, [c]]] = [2, [4, [6]]]) => { };


//! PROBLEMS:
// problems with complex destructuring and/or nesting

const fn10 = ([a, [b, c]] = [2, [3, 4]]) => { };
var out1 = getParams(fn10); //?
out1.length; //?
//=>

const f15 = ([a, [b, [c]]] = [2, [4, [6]]] ) => {};
var out2 = getParams(f15); //?
out2.length; //?


const f16 = ({ x:a, y:b, z:c } = {x:22, y:33, z:44}) => {};
getParams(f16); //?

const f17 = ({ x: a, y: b, z: c } = {}) => { };
getParams(f17); //?


const f18 = ({ x: a = 1, y: b = 2, z: c = 3 } = { x: 22, y: 33, z: 44 }) => { };
getParams(f18); //?
