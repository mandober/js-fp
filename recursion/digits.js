/*
Digits in base 10

base: 10, digits: 0-9

Properties:
- max sum of 2 1-digit numbers: 9+9=18
- max sum of 2 digits is 9+9=18, which is 18-9
  i.e. summing the digits of a 2-digit number is the same as subs 9:
  15: 1+5 = 15-9 = 6

Product of 2 n-digit numbers and the number of digits in the result:
1) 1-digit number: a1 * b1 = d1 | d2
   - resulting digits, a= b: d2 > a=3 > d1
   - resulting digits, a!=b: d2 > a=3 > d1
     a = 3 AND b = 3
     a = 4 AND b = 2
     a = _ AND b = 1

1) 2-digit number: a2 * b2 = d3 | d4
    min: 10 * 10 =  100 (d3)
    min: 31 * 31 =  961 (d3)
    min: 32 * 32 = 1024 (d3)
    min: 33 * 33 = 1089 (d3)
    min: 99 * 99 = 9801 (d3)



square of n-digit number x and the number of digits (d) in the result:
n=1 : d1 < 3
n=2 : d3 < 31


*/
assert = require('assert');
assert(2 + 2 === 4);
