'use strict';
const isNothing = require("./");



isNothing(0); /*?*/
isNothing(); /*?*/
isNothing(null); /*?*/
isNothing(""); /*?*/
isNothing("0"); /*?*/
isNothing(NaN); /*?*/
