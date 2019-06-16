var dn = require('./')

var n1 = dn(500);
console.log('500:', n1);

var n2 = dn(new Number(8));
console.log('new Number(8):', n2);

var n3 = dn(-0);
console.log('-0:', n3);

var n4 = dn(501);
console.log('501:', n4);
