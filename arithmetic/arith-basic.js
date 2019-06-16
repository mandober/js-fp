/*
Arithmetic: the basic operations

* inc|rement        succ|essor
- dec|rement        pred|ecessor
* add|ition
- sub|traction
* mul|tiplication
- div|ision

*/

let Arith = {
    S: n => ++n,
    P: n => --n,
};

(function(arith) {


// Natual numbers, N
// 0 ∈ N
// S(0) = 1
// n ∈ N.S(n) ∈ N

// Increment - Successor
const inc = n => ++n;
// n ∈ N.S(n) ∈ N
// S(0) = 1
// n+1 = S(n)
// S(n+1) = S(S(n))

// Decrement - Predecessor
const dec = n => --n;
// (n ∈ N ∧ n != 0).P(n) ∈ N
// P(0) = 0
// n-1 = P(n)
// P(n-1) = P(P(n))


// Addition: augend + addend = sum
// Due to commutativity both operands may as well be called addends.
const add1 = a => b => a + b;
const add2 = (a, b) => a + b;
// Addition is defined recursively:
// x+0=x
// (1+n)+a=1+(n+a)
// n + 0 = n
// S(n) + a = S(n + a)





// Subtraction
//    subtrahend - minuend = difference
const sub = subtrahend => minuend => difference = subtrahend - minuend;

// Multiplication
//    multiplicator * multiplier = product = (factor * factor)
const mul = multiplicator => multiplier => product = multiplicator * multiplier;

// Division
// dividend / divisor = quotient
const div = dividend => divisor => quotient = dividend / divisor;

let arithBasic = {
    inc,
    dec,
    add1,
    add2,
    sub,
    mul,
    div,
    // aliases
    incr     : inc,
    increment: inc,
    successor: inc,
    succ     : inc,

    decr     : dec,
    decrement: dec,
    predessor: dec,
    pred     : dec,
};


// Object.assign(target, source, [source2,...])
Object.assign(arith, arithBasic);

return Arith = arith;

})(typeof(Arith) === 'undefined' ? {} : Arith);
