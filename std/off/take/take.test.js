const {take, takeRight} = require('./index');

// test
const arr = [1, 2, 3, 4, 5, 8, 7, 6, 9];

take(3, arr); /*?*/
take(arr, 3); /*?*/

take(3)(arr); /*?*/
take(arr)(3); /*?*/

var three = take(3); /*?*/
three(arr); /*?*/

var arr3 = take([1, 2, 3, 4, 5]); /*?*/
arr3(3); /*?*/


take(arr)(13); /*?*/
take(13)(arr); /*?*/

take(0)(arr); /*?*/


take(); /*?*/
take(1, 1); /*?*/
take(1, "abcd"); /*?*/


takeRight(5, arr); /*?*/
takeRight(25, arr); /*?*/
