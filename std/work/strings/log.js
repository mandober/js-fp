var chalk = require("chalk");

// overloaded console methods:
var c = {
  res: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m"
};

var log = function log(x) {
  console.log("\x1b[2;40;36;m", x, "\x1b[0;0;0;m");
};

o = {
  0: 123,
  b: 432,
  c: [3, 2, 1]
};

a = [3243, 234234, 23423];

log(123);
// log(o);
// log(a);
