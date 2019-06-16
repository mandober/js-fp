/*
Write a function that, given a number, x, tries to find a sequence of
steps (additions and multiplications) that produces x. Steps are created
by starting from 1 and then (repeatedly) either add 5 or multiply by 3.

For example,
13 = 1 *3 +5 +5
15 = unreachable

*/


// mine
function branch(x, acc = 1, seq = "1") {
    if (x < 1) throw new Error("x must be a positive number!");
    // base cases:
    if (acc === x) return seq;  // bingo!
    if (acc > x) return false;  // overshot
    // rec case:
    //
    // First the left branch is explored and only if it fails the
    // right branch is explored. If the left branch doesn't fail
    // then the execution will never reach the right branch.
    //
    // This means the shortest path to the solution (if it has more
    // than 1 path) may not be the one that is returned, since it will
    // just return a solution, i.e. the first one found.
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
