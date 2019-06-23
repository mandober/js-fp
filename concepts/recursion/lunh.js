/*
Luhn algorithm
==============
- AKA "modulus 10" or "mod 10" algorithm is a simple checksum formula used
  to validate a variety of id numbers (credit cards, IMEI).
- public domain algorithm; designed to protect against accidental errors

The formula verifies a number against its included CHECK DIGIT, which is usually
appended to a partial account number to generate the full account number. The
check digit is the last digit (LSD, least significant digit).

Test
====
It chacks validity of CC numbers, which generally have 16 digits (4x4).
- Starting with LSD (moving left), double every second digit (LSD isn't doubled)
- If the result of doubling is greater than 9, add the digits together (or just
  substract 9, e.g. 16: 1+6 = 16−9, 18: 1+8 = 18−9).
- sum ALL the digits (not just the doubled ones)
- If total % 10 is 0 (i.e. total ends in 0) then the CC num is valid.


Checking credit card validity:
- strating from the LSD: 3 in 5427483
- double every second digit: 4 7 8
- if any doubling is GT 9 subtract 9 (i.e. add both digits)
- then sum al digits
- if the sum mod 10 is zero, it is valid
* CC numbers usually have 16 (4*4) digits

5  42   74   83
5  4 2  7 4  8 3
5  8 2 14 4 16 3
5  8 2  5 4  7 3
---------------
sum: 34
(34 mod 10 == 0) ? valid : invalid
*/
const iluhn = (x) => {
    let sx = x.toString();
    let lx = sx.length;
    let sum = 0;

    for (let i=lx-1; i>-1; --i) {
        if (i % 2 == 0) sum += +sx[i];
        else {
            if (sx[i].length > 1) sum += +sx[i][0] + +sx[i][1];
            else sum += +sx[i];
        }
    }
    return sum;
};

console.log(iluhn(5427483));
