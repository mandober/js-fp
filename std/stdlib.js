// @ts-check

/*
ć
A B Γ Δ  E Z H Θ  I K Λ M  N Ξ O Π  P Σ T Υ  Φ X Ψ Ω
α β γ δ  ϵ ζ η θ  ι κ λ μ  ν ξ o π  ρ σ τ υ  ϕ χ ψ ω

ά ϐ ∂ ∆  ε έ ή ϑ  ί ϰ          ό ϖ  ϱ ϛ ύ ϒ  φ     ώ
ϝ ϟ ς Ϙ ϙ ϡ Ͳ

άλφα    βήτα   γάμμα    δέλτα
έψιλον  ζήτα   ήτα      θήτα
ιώτα    κάππα  λάμδα    μυ
νυ      ξι     όμικρον  πι
ρώ      σίγμα  ταυ      ύψιλον
φι      χι     ψι       ωμέγα



*/
'use strict';

// u namespace (object)
let u = {
  id: "ć-lib",
  version: "0.0.1",
};

u.curry = (f, arr = []) => (...args) => g =>
      g.length === f.length ? f(...g) : curry(f, g)([...arr, ...args]);


module.exports = u;




// import many from one
// const {car, cdr, cons, isAtom} = require(STDMODS + 'list');
const car = require('./mods/list/list.js');


// Info
const cc = x => console.log(x);
const cl = x => console.log(x.toString(), x);
// const ls = x => console.log(JSON.parse(JSON.stringify(x)));
const getClass = x => Object.prototype.toString.call(x).split(/[ \]]/)[1];


// Arith
const add1 = a => b => a + b;  // curried add
const add2 = (a, b) => a + b;  // binary add
const sum = ([...arr]) => arr.reduce((a, b) => a + b);






// FP
const compose = (...fns) => (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];


/*
(function(G) {
c(getClass(G))
c(getClass(global))
c(getClass(this));
// cc(typeof(this) == 'object')
// cc(global == this)
})(this)
*/

// cc(getClass(Array.isArray))
