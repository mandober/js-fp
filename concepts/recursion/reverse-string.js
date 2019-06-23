

// The function that accepts a string and reverses it recursively.
const recrev = s =>
  s.length === 1
  ? s
  : s.slice(-1) + recrev(s.slice(0, -1));

// Recursive map function (it should always return a new array)
const recmap = (f, res = []) => arr =>
arr.length === 0
? res // f(arr[0])
: res = f(arr[0])
  [10].concat(recmap([2,3]))

  //: arr[-1] + recmap(arr[0, -1]);

// Call it using the array [1,2,3]
// Create a new array that holds the result of calling f(1)
// Recurse
// Return [10].concat(recmap([2,3]))
// Basecase: calling recmap on empty array ends the recursion.
