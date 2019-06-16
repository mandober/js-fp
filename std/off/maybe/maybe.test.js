
const safeSquareAll = mapWith(maybe((n) => n * n));

safeSquareAll([1, null, 2, 3]); /*?*/
//=> [1, null, 4, 9]

