'use strict';

const parseParams = require ("./");


// SIMPLE
function sf1(a, b) { }
parseParams(sf1); /*?*/

 let sf2 = function(a, b) { }
parseParams(sf2); /*?*/

let  sf3 = function sf3 (a, b) { }
parseParams(sf3); /*?*/

const sf4 = function(
    a,
    b)
{ }
parseParams(sf4); /*?*/



var g1 = a => { };
parseParams(g1); /*?*/

var g2 = (a) => { };
parseParams(g2); /*?*/

var g3 = (a, b) => { };
parseParams(g3); /*?*/



// spread
function f2 (a, ...b){}
parseParams(f2); /*?*/

// default args
function f3(a=1, b, c=5) { }
parseParams(f3); /*?*/

// spread + default args
function f4(a = 1, b, ...c) { }
parseParams(f4); /*?*/



// arrow
var fn1 = a => {};
parseParams(fn1); /*?*/
//=> ['a']

var fn2 = (a, b, c) => {};
parseParams(fn2); /*?*/
//=> ['a', 'b', 'c']

function fn4(a) { }  /*?*/
parseParams(fn4); /*?*/
//=> ['a']

function fn5(a, b, c, d) { }
parseParams(fn5); /*?*/
//=> ['a', 'b', 'c', 'd']

function fn6(
    a,
    b,
    c,
    d
) { }
parseParams(fn6); /*?*/
//=> ['a', 'b', 'c', 'd']


var fn7 = function (a, ...b) { }
parseParams(fn7); /*?*/
//=> ['a', 'b']

let fn8 = function (a = 10, ...b) { }
parseParams(fn8); /*?*/
//=> ['a', 'b']

let fn9 = function *(a = 10, b = 5) { }
parseParams(fn9); /*?*/
//=> ['a', 'b']

const f10 = function f10(a, b, c, d) { };
parseParams(f10); /*?*/
//=> ['a', 'b', 'c', 'd']


const f11 = ([a, b, c]) => {};
parseParams(f11); /*?*/
//=> [['a', 'b', 'c', 'd']]

const f12 = (x, y = 3, ...z) => {};
parseParams(f12); /*?*/
//=> ['x', 'y', 'z']

const f13 = ({ x = 1, y = 2, z = x + 3 } = {}) => [x, y, z];
parseParams(f13); /*?*/
//=> ['x', 'y', 'z']

const f14 = (f, { x = 1, y = 2, z = x + 3 } = {}, ...r) => [f, x, y, z, r];
parseParams(f14); /*?*/
//=> ['f', 'x', 'y', 'z', 'r']


//! PROBLEMS:
// problems with complex destructuring and/or nesting

const fn10 = ([a, [b, c]] = [2, [3, 4]]) => { };
var out1 = parseParams(fn10); /*?*/
out1.length; //?
//=>

const f15 = ([a, [b, [c]]] = [2, [4, [6]]] ) => {};
var out2 = parseParams(f15); //?
out2.length; //?


const f16 = ({ x:a, y:b, z:c } = {x:22, y:33, z:44}) => {};
parseParams(f16); /*?*/

const f17 = ({ x: a, y: b, z: c } = {}) => { };
parseParams(f17); /*?*/


const f18 = ({ x: a = 1, y: b = 2, z: c = 3 } = { x: 22, y: 33, z: 44 }) => { };
parseParams(f18); /*?*/
