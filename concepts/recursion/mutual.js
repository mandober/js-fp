/*
Mutual recursion
*/
const even = x => x == 0 ? true : odd(--x);
const odd  = x => x == 0 ? false : even(--x);
console.log(even(4));


/*
fib(n) = fib(n-1) + fib(n-2)
fib(n-1) = fib(n) + fib(n-1)
*/

const fib = x => x < 2 ? 1 : fib(x-1) + fib(x-2);

// index : 0 1 2 3 4 5  6  7  8  9 10  11  12  13  14  15   Nth fib#
// values: 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987


const lsFibUpto = n => {
    if (n < 1) return;
    //console.log(a);
    let i = a = b = 1;

    (n < 2)
        ? console.log(1)
        : console.log(fib(n-1) + fib(n-2));

};
