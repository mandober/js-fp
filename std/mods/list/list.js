'use strict';
/*
Lispy ops:
    car - get first element of the list as atom
    cdr - get all but first elements of the list as list
    cons - prepend an atom to the list, returning the new list
    isAtom - (predicate) check if expr is an atom, return boolean

list a = [1, 2, 3, 4]

head = car = 1
tail = cdr = [2, 3, 4]
init = [1, 2, 3]
last = 4
*/


// head :: [a] -> a
const head = arr => arr[0];
// head([1,2,3]) = 1

// safeHead :: [a] -> Maybe a
// const safeHead = compose(Maybe.of, head);


// tail :: [a] -> [a]
const cdr = ([_, ...tail]) => tail;
// cdr([1,2,3]) = [2,3]


// last :: [a] -> a
const last = arr => arr[-1];
// last([1,2,3]) = 3


const cons = (head, tail) => [head, ...tail];
// cons(0, [1,2,3]) = [0,1,2,3]


// atom? = isAtom = ᴚ
const isAtom = s => !Array.isArray(s);


// reverse a list
const revList = [].reduce((acc, x) => [x].concat(acc), []);


module.exports = {
    car: head,
    head,
    cdr,
    tail: cdr,
    cons,
    isAtom,
};




/*

let headTail = ([head, ...tail]) => [head, tail];

let ([h, ...t]) = headTail([1, 2, 3])

let [h, t] = headTail(a);

// [1, [2, 3]]
*/
