
const complement = (a, b) => a.filter(el => !b.includes(el));


if (typeof module !== "undefined") module.exports = complement;


// setA {abcde}
// setB {abfg}
// complement A \ B = ["c", "d", "e"];
var a = ["a", "b", "c", "d", "e"];
var b = ["a", "b", "f", "g"];
var ca = complement(a, b);
console.log('ca: ', ca);

// complement B \ A = ["f", "g"];
var cb = complement(b, a);
console.log('cb: ', cb);

/*

|------ A ----|--- A∩B --|------ B -----|
|   c         |     a    |       f      |  \
|   d         |     b    |       g      |  / A∪B union
|   e         |          |              |
|-------------|----------|--------------|
      A\B                      B\A
      AΔB      A∩B          AΔB

AΔB = (A∪B) ∩ (A∩B)
AΔB = A\B ∪ B\A
A\B =
B\A =
A\B ∪ B\A = AΔB

*/

