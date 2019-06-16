/*
 * array-venn.js
 *
 * Calculates union, intersection, difference and complement.
 * If input is 2 arrays, everything works as expected.
 * In case of 3 or more arrays:
   - UNION works as expected:         A ∪ B  ∪ C  ∪ D
   - INTERSECTION does not, it is: ((A ∩ B) ∩ C) ∩ D
   - DIFFERENCE does not, it is: ((A Δ B) Δ C) Δ D
   - COMPLEMENT does not, it is: ((A \ B) \ C) \ D
 */
var Off = function (off) {
    'use strict';
    off = off || {};

    off.union = function (a, b) {
        return [...new Set(a.concat(b))].sort();
    };

    off.intersection = function (a, b) {
        return [...new Set(a.filter(el => b.includes(el)))].sort();
    };

    off.difference = function (a, b) {
        let diff_a = [...new Set(a.filter(el => !(b.includes(el))))];
        let diff_b = [...new Set(b.filter(el => !(a.includes(el))))];
        return diff_a.concat(diff_b).sort();
    };


    off.complement = function (a, b) {
    };


    // is a subset of b
    off.subset = function (a, b) {

    };

    return off;
}(Off || {});

/*

|------ A ----|--- A∩B --|------ B -----|
|       c     |     a    |       f      |  \
|       d     |     b    |       g      |  / A∪B union
|       e     |          |              |
|-------------|----------|--------------|
      A\B         A∩B           B\A
      AΔB                       AΔB

A∪B = A∩B ∪ AΔB
AΔB = (A∪B) ∩ (A∩B)
AΔB = A\B ∪ B\A
A\B =                {abcde} ∩ {abfg} = {cde}
A\B = A ∩ AΔB        {abcde} Δ {cdefg} = {cde}
B\A = B ∩ A∩B
A\B ∪ B\A = AΔB

*/





/*
                setA {ab cde}
                setB {ab fg}
Methods:
       union: A ∪ B  {abcdefg}
intersection: A ∩ B  {ab}
  difference: A Δ B  {cdefg}
  complement: A \ B  {cde}
              B \ A  {fg}
*/
let a = ["a", "b", "c", "d", "e"];
let b = ["a", "b", "f", "g"];
// let a = ["b", "c", "a", "b", "c", "d", "e"]
// let b = ["f", "g", "a", "b", "f", "g"];

// union A ∪ B = ["a", "b", "c", "d", "e", "f", "g"];
Off.union(a, b);

// intersection A ∩ B = ["a", "b"];
Off.intersection(a, b);

// difference A Δ B = ["c", "d", "e", "f", "g"];
Off.difference(a, b);


// complement A \ B = ["c", "d", "e"];


// complement B \ A  = ["f", "g"];
