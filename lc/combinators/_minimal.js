// Lambda Calculus with JS: minimum functions needed

// Booleans: 2 bool fns, at the same time bool const, T/F
var T = True => () => True;      // T ≡ λab.a
var F = () => False => False;    // F ≡ λab.a   F(_)->I

var AND   = selector => bool => selector(bool)(F);  // ∧
var IMPLY = selector => bool => selector(bool)(T);  // →
var OR    = selector => bool => selector(T)(bool);  // ∨
var NOT   = selector => selector(F)(T);             // ¬

// Combinators
var I = id => id;               // λf.f
var M = f => f(f);              // λf.ff

// PRC: succ, zero, proj
var S = w => f => suc => f(w(f)(suc));    // S ≡ λwyx.y(wyx)
var Z = s => zero => zero;    // Z ≡ λsz.s

// Conditionals
var isZero = n => n(F)(NOT(F)); // λx.xF¬F


/*
Arithmetic with LC
==================
S≡ λwyx.y(wyx)
0≡ λsz.z
S0: (λwyx.y(wyx))(λsz.z)
1≡ λsz.s(z) ≡ λyx.y(wy)x
2≡ λsz.s(s(z))
3≡ λsz.s(s(s(z)))

1 ≡ SZ ≡
(λwyx.y(wyx))(λsz.z)        [(λsz.z)/w]y(wyx)
= λyx.y((λsz.z)yx)          [y/s]z
= λyx.y((λz.z)x)            [x/z]z
= λyx.yx = λsz.sz

2 ≡ S1 ≡
(λwyx.y(wyx))(λsz.s(z))     [(λsz.s(z))/w]y(wyx)
=λyx.y((λsz.s(z))yx)        [y/s]s(z), [x/z]s(z)
=λyx.y(y(x))                [x/z]z
= λsz.s(s(z))
*/

// var x1 = s => z => s(z);
var _0 = Z;
var _1 = S(Z);
var _2 = S(S(Z));
var _3 = S(S(S(Z)));
