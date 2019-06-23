// Currying

var curry = f => {
  // ...
};


var addBinary = (a,b) => a+b;
var addCurried = curry(addBinary);
//: addCurried = a => b => addBinary(a,b);

