/*
Recursive branching

    This is the recursive function that accepts a number and, starting with 1,
    either outputs the sequence of steps to produce the given number, or asserts
    that such a sequence does not exists. A step is either an addition with 5,
    or a multiplication with 3. Any sequence of steps is acceptable, regardless
    if there may be a solution using fewer steps (shorter sequence).

    For example, given the number 13, the correct sequence consists of 3 steps:
    `(*3, +5, +5)`. On the other hand, 15 is unreachable, `()`.

Strategy

    First the "left" path (adding 5) is explored, and only if it fails the
    "right" path (multiplying by 3) is considered. This behaviour is the
    consequence of the `||` operator -- if the left branch succeeds, the right
    branch is never considered, even though it may yield a solution with a
    shorter number of steps.

*/


// mine
function branch(x, acc = 1, seq = "1") {
    if (x < 1) throw new Error("x must be a positive number!");
    // base cases:
    if (acc === x) return seq;  // bingo!
    if (acc > x) return false;  // overshot
    // rec case:
    return (branch(x, acc+5, seq+" +5") || branch(x, acc*3, seq+" *3"));
}

branch(922) // "1 +5 +5 +5 +5 +5 +5 *3 +5 *3 +5 +5 *3 +5 +5"



// theirs
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
            find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24)); // (((1 * 3) + 5) * 3)



/*
Branching

Explore different path by recursively branching.
*/
function branch(x, acc=1, seq="1", steps=1) {
    console.log(".");
    if (acc > x) return false;
    if (acc === x) return {steps, seq};
    return branch(x, acc*3, seq+" *3", ++steps)
        || branch(x, acc+5, seq+" +5", ++steps);
}

branch(18); // "1 *3 +5 +5 +5"
branch(18); // "1 +5 *3"
