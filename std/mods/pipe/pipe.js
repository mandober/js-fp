'use strict';
/**
 * Lay down the pipeline
 */

// pipe(...fns: [...Function]) => x => y
const pipe = (...fns) => x => fns.reduce((acc, curr) => curr(acc), x);


// EXPLORING

// logger
const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};

// pipe 'em on through
const doStuffBetter = pipe(
  n => n + 1,       // const g = n => n + 1;
  trace('after g'), // after g: 21
  n => n * 2,       // const f = n => n * 2;
  trace('after f')  // after f: 42
);

doStuffBetter(20); // 42
