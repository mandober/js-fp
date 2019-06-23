/*
Correlation

Correlation is a measure of dependence between statistical variables.
A statistical variable is not quite the same as a programming variable.
In statistics you typically have a set of measurements, and each variable
is measured for every measurement.

Correlation is usually expressed as a value ranging from -1 to 1.
* 0 indicates vars are not related
* 1 indicates perfectly related vars
* -1 indicates perfectly alligned but opposed vars

Phi coefficient (ϕ) is used to measure of correlation between 2 Booleans.
Its input is a frequency table containing the number of times different
combinations of vars were observed. The output is a number (-1 to 1) 
describing their correlation.

ϕ = n₁₁ × n₀₀ - n₁₀ × n₀₁ / sqroot(n₁₊ n₀₊ n₊₁ n₊₀)


- nXY is the number of measurements where first var is X, second is Y 
  (X and Y are boolean values), e.g. n01 means first is 0, second is 1
- nX₊ first is X (1 or 0), second is either, e.g. n₀₊ means first is 0 second is either 
- n₊Y first is either, second is Y (1 or 0), e.g. n₊₁ means first is either, second is 1
- n1• refers to the sum of all measurements where the first variable is true
- n•0 refers to the sum of the measurements where the second variable is false

So for our freq table, the dividend is 1×76−4×9=40, and the divisor is the square root 
of 5×85×10×80, or √340000. This puts ϕ ≈ 0.069, which means a tiny correlation.

*/
const phi = ϕ = freqTable => {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1])); // 0.068599434
