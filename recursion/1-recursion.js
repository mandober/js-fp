/*
Recursion
- Recursion in JS means defining a function in terms of itself.
- Lest infinitely loop, it must have a base case to reduce itself to.
- Once the base case value is obtained, the stack gets unwound, with each stack
  frame providing a return value for a previous recursive call.
- A fn set up to, e.g., sum all the returned values, will add each value (to the
  running total) as it is popped off the stack, returning the total sum.
- One can think of a recursive call as if the function called another function,
  indentical to itself (which then called another one and so on).
- Just like when one fn calls another, a recursive call creates a new stack
  frame on the stack; the original function transfers control to the called fn,
  and then waits for the called fn to return a value, so it can continue. Only,
  in this case, the control is transfered to (another instance of) itself.
- Every iteration (loop) can be replaced with recursion.
- Albeit more elegant, recursion risks overflowing the stack, unlike iteration.
- Tail call is a way to optimize a recursive call if it is the last sole expr.
- Tail call optimization feature of JS is underway (?)

*/
let h = [
    { id: "ani", p: null },
        { id: "mam", p: "ani" },
            { id: "cat", p: "mam" },
                { id: "sia", p: "cat" },
                { id: "per", p: "cat" },
            { id: "dog", p: "mam" },
                { id: "dob", p: "dog" },
                { id: "rot", p: "dog" },
];

let makeTree = (h) => {
    return ({
        [h[0].id]: {
            [h[1].id]: {
                [h[2].id]: {
                    [h[3].id]: null,
                    [h[4].id]: null,
                },
                [h[5].id]: {
                    [h[6].id]: null,
                    [h[7].id]: null,
                }
            }
        }
    });
};


let getLevel = (h, lvl) => h.filter( ({_,p}) => p == lvl);
// console.log(getLevel(h, null));

let [{id: root,}] = getLevel(h, null);
// console.log(root);


console.log(makeTree(h));

/*
{
    ani: {
        mam: {
            cat: {
                sia: null,
                per: null,
            },
            dog: {
                dob: null,
                rot: null,
            }
        }
    }
}
*/
