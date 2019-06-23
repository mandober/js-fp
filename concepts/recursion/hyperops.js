/*
Hyperoperations 𐌣

- hyperoperation sequence is an infinite sequence of arithmetic operations
(hyperops) that starts with a successor function (n = 0), continues with the
addition (n = 1), multiplication (n = 2), exponentiation (n = 3), extending
further, using right-associativity.

The nth member of the sequence is named after the Greek prefix of n suffixed
with "-ation":
tetration (n = 4)
pentation (n = 5)
hexation (n = 6)
etc.
and can be written as using n − 2 arrows in Knuth's up-arrow notation.

Each hyperop may be understood recursively in terms of the previous one by:
a[n]b = a[n-1] (a[n-1] (a[n-1] (...[n-1] (a[n-1] (a[n-1]a))...)))
for n > 1, where [n] is a hyperop. RHS means "b copies of a".

It may also be defined according to the recursion rule part of the definition,
as in Knuth's up-arrow version of the Ackermann function:
a[n]b = a[n-1] (a[n](b-1)), n > 0






Similar sequences have historically been referred to by many names, including:
- the Ackermann function (3-argument)
- the Ackermann hierarchy
- the Grzegorczyk hierarchy (which is more general)
- Goodstein's version of the Ackermann function
- operation of the nth grade
- z-fold iterated exponentiation of x with y
- arrow operations
- reihenalgebra
- hyper-n



Knut's arrow ↑

Hyperoperations, hyper-n:
hyper-0: successor
hyper-1: addition
hyper-2: multiplication
hyper-3: exponentiation
hyper-4: tetration
hyper-5: pentation
hyper-6: hexation
hyper-n

m \uparrow ^{2}(n+1)

*/
