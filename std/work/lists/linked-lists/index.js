/*  DESC: LINKED LIST
 *  FILE: /linked-list/index.js
 */
'use strict';

// node import/export
if (typeof require !== "undefined") {
    var list = require('./linked-list_class');
}

// USAGE
var ll = list();

ll.append(55);
ll.prepend(44);
ll.append(66);
ll.prepend(33);
ll.append(77);
ll.prepend(22);
ll.append(88);
ll.append(99);
ll.prepend(11);

console.log('ll:', ll);
