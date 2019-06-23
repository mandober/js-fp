// BOOLEANS
// Representations for true/false functions also act as TRUE/FALSE constants
const T = True => () => True;
const F = () => False => False;

// Logical operators
const AND   = bool1 => bool2 => bool1(bool2)(F);
const IMPLY = bool1 => bool2 => bool1(bool2)(T);
const OR    = bool1 => bool2 => bool1(T)(bool2);
const XOR   = bool1 => bool2 => bool1(F)(bool2);
const NOT   = bool  => bool(F)(T);
// IF-THEN-ELSE: predicate is an expr that evals to a boolean,
// and if that resulting boolean is T, predicate "selects" the 1st arg;
// if the resulting boolean is F, predicate "selects" ("returns") the 2nd arg.
const TEST = predicate => then_part => else_part => predicate(then_part)(else_part); // λlmn.lmn

// NUMBERS
// Successor: S
const S = num => s => x => s(num(s)(x));

// Zero: Z. Zero is the same as F, but deserves own definition
const Z  = s => naught => naught;

const c0 = Z;                   // n0 = Z
const c1 = s => z => s(z);      // n1 = S(Z)
const c2 = s => z => s(s(z));   // n2 = S(S(Z))

// ARITHMETIC
const PLUS = m => n => s => z => m(s)(n(s)(z)); // λmnsz.ms(nsz)


// PLUS
//PLUS C1 C1
//= (λm.λn.λs.λz.     m     s(     n      sz)) (C1) (C1)   | [C1/m, C2/n]ms(nsz)
//       = λs.λz.    (C1)   s(    (C1)    sz)              | subst. symbols
//       = λs.λz. (λw.λt.wt)s( (λf.λy.fy) sz)
//       = λs.λz. (λt.st)((λf.λy.fy)      sz)
//       = λs.λz. (λt.st)(sz)
//       = λs.λz. s(sz)
//= C2
