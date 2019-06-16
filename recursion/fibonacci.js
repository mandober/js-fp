/*
Fibo

*/
const fibi = x => x < 2 ? 1 : fibi(x-1) + fibi(x-2);
console.log(fibi(5));

