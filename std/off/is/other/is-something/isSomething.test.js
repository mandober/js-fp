'use strict';
const isSomething = require("./");



isSomething(0); /*?*/
isSomething(); /*?*/
isSomething(null); /*?*/
isSomething(""); /*?*/
isSomething("0"); /*?*/
isSomething(NaN); /*?*/
