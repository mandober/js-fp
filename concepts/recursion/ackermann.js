/*
Ackermann function, φ

- (First example of a) total computable fn that is not primitive recursive.
- Cannot be transformed into iterative version.

Ackermann's original function is ternary; with params (m,n,p) it is defined as:
    p=0: hyper-1: addition        φ(m,n,0) = m+n
    p=1: hyper-2: multiplication  φ(m,n,1) = m·n
    p=2: hyper-3: exponentiation  φ(m,n,2) = m^n

and for p > 2 it extends into hyperoperations:
    p=3: hyper-4: tetration       φ(m,n,3)=m \uparrow ^{2}(n+1)
    p=4: hyper-5: pentation
    p=5: hyper-6: hexation
   etc.: φ(m,n,p) ⪆ m ↑ p−1(n+1)
       $$φ(m,n,p) \gtrapprox m \uparrow ^{p-1}(n+1) (p \geq 4)$$

Note: there's no hyper-0 i.e. successor operation, p=0 is addition.


Ackermann's function
====================
φ(m, n, p) :
φ(m, n, 0) = m + n                      for        p = 0    add
φ(m, 0, 1) = 0                          for n = 0, p = 1    mul
φ(m, 0, 2) = 1                          for n = 0, p = 2    exp
φ(m, 0, p) = m                          for n = 0, p > 2
φ(m, n, p) = φ(m, φ(m, n-1, p), p-1)    for n > 0, p > 0
*/

// p is hyperop (p=0 addition, p=1 mult, p=2 exp, p=3 tetr, p=4 pentation)
const ack = (m, n, p) => {
    //if ((m < 0 || n < 0) || p < 0) return null;
    switch (p) {
        case 0:             return m + n;   // add
        case 1: if (n == 0) return 0;       // mul
        case 2: if (n == 0) return 1;       // exp
        default:                            // hyperops p > 2
            if (n == 0) return m;
            else return ack(m-1, ack(m, n-1));
    }

    // if (p == 0) return m + n;     // p=0 add
    // if (p == 1 && n == 0) return 0;         // p=1 mult
    // if (p == 2 && n == 0) return 1;         // p=2 exp
    // if (n == 0) return m;
    // return ack(m-1, ack(m, n-1));
};

// console.log("add, p=0: ack(3,2,0): " + ack(2,1,0));
// console.log("mul, p=1: ack(3,2,1): " + ack(3,2,1));


/*
Many authors have modified Ackermann's function for various purposes, so today
the "Ackermann function" may refer to any varition of the original function.

AckermannⲺ Ⴕ Péter Ꙭ ✘ ✔


Ackermann-Péter
===============
One such common variation is the binary Ackermann-Péter function,
which is defined for nonnegative integers m and n.

- AP is binary: AP(m,n)
- evaluation always terminates as recursion is bounded:
  - in each recursive application either m decreases, or
    m remains the same and n decreases.
  - each time n reaches zero, m decreases, so
    m eventually reaches zero as well

ackpet(m, n)                        for m, n >= 0
  ackpet(0, n) = n+1                for m = 0           (base case)
  ackpet(m, 0) = ackpet(m-1, 1)     for n = 0           (rec1)
  ackpet(m-1, ackpet(m, n-1))       for m > 0 ∧ n > 0   (rec2)

A(1, 2              ) =
A(0, A(1, 1)        ) =
A(0, A(0, A(1, 0))  ) =     ... A(m,   0)
A(0, A(0, A(0, 1))  ) =     ... A(m-1, 1) = A(0, 1)
A(0, A(0, 2)        ) =     ...           = A(2)
A(0, 3              ) = 4

*/
const ackpet = (m, n) => {
    if (m < 0 || n < 0) return null;
    // base case
    if (m == 0) return n + 1;
    // specific rec case (for n=0)
    if (n == 0) return ackpet(m-1, 1);
    // general rec case
    return ackpet(m-1, ackpet(m, n-1));
};

// console.log("ackpet(2,3): " + ackpet(3,1));   // 13
// console.log("ackpet(3,1): " + ackpet(3,1));   // 13
// console.log("ackpet(3,1): " + ackpet(3,10));  // 13
// console.log("ackpet(4,0): " + ackpet(4,0));   // 13
// console.log("ackpet(4,1): " + ackpet(4,1));   // stackpet overflow

// let m = 0;
// for(let m = 0; m < 4; ++m) {
    // for(let n = 0; n < 15; ++n) {
        // console.log(`ackpet(${m},${n}): ` + ackpet(m,n));
    // }
// }

/* (m=0)  (m=1)  (m=2)   (m=3)
    n+1    n+2    2n+3   2^(n+3) -3

    0      1      2      3              4
n ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
0 | 1      2      3      5                          13
1 | 2      3      5      13             +8          S/O
2 | 3      4      7      29             +16         S/O (~2×10^19728)
3 | 4      5      9      61             +32
4 | 5      6      11     125=2^7-3      +64    2^6
5 | 6      7      13     253=2^8-3      +128   2^7
6 | 7      8      15     509            +256   2^8
7 | 8      9      17     1021           +512   2^9
8 | 9     10      19     2045           +1024  2^10
9 | 10    11      21     4093           +2048  2^11
10|               23     8189           +4096  2^12
11|               25     S/O            +8192  2^13


*/
