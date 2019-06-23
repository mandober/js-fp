// Arithmetic

/*
The basic arithmetic operations:
* increment (successor)
* decrement (predecessor)
* addition
* subtraction
* multiplication
* division

Advanced operations:
* Euclidean division
* Modulo operation
* Modular arithmetic
* manipulations of percentages
* square roots
* exponentiation
* logarithms
*/


/*
 * Unary: Number → Number
 */

// Increment
const inc = n => ++n;
// Decrement
const dec = n => --n;


/*
 * Binary: Number → Number → Number
 */

// Addition
// Add addend to augend to get a sum
// augend + addend = sum
// Due to commutativity it may as well be: add addends to get a sum
const add = augend => addend => augend + addend;
const addition = augend => addend => ({sum: augend + addend});
// var {sum: s} = addition(5)(4)

// Subtraction
// subtrahend - minuend = difference
const sub = subtrahend => minuend => difference = subtrahend - minuend;

// Multiplication
// multiplicator * multiplier = product, factor * factor = product
const mul = multiplicator => multiplier => product = multiplicator * multiplier;

// Division
// dividend / divisor = quotient
const div = dividend => divisor => quotient = dividend / divisor;
