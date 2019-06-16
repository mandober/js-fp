// Using
const obj1 = { 
    a: "abc",
    b: 33,
    c: true
};

const obj2 = {
    misc: "yes",
    id: 43
};

// copy 1 prop
console.log('obj1: ', obj1);
console.log('obj2: ', obj2);
copyProperty(obj1, 'a', obj2);
console.log('obj1: ', obj1);
console.log('obj2: ', obj2);

// copy all props
var c = copyProperty(obj1);
console.log('c: ', c);


/*
PropertyDescriptor = {
    value: 'abc',
    writable: true,
    enumerable: true,
    configurable: true
}
*/