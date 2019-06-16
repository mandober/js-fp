'use strict';

const K = require("./");
const I = require("../identity/");


// identity always returns the arg
I(6); /*?*/

// kester always returns the 1. arg
K(6)(3); /*?*/
K(12)(33); /*?*/
var constantFx = K(Infinity);
constantFx(12); /*?*/
constantFx(-Infinity); /*?*/
constantFx(I); /*?*/


// K(I) always returns the 2. arg
K(I)(12)(3); /*?*/
K(I)(7)(22); /*?*/

// I(K) always returns the 1. arg
I(K)(3)(4); /*?*/
I(K)(8)(9); /*?*/
I(K)(5)(3); /*?*/
