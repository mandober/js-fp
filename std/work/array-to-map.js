// Map and Array relation

var kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);

myMap.get('key1'); // returns "value1"

// Use the Array.from functon to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// Or use the keys or values iterators and convert them to an array
console.log(Array.from(myMap.keys())); // Will show ["key1", "key2"]
