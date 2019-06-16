/**
  * Get object's own properties.
  *
  * @param {Object}  obj  Object to query for own properties.
  * @return {array}  All own properties of an object.
  *
  */
let getOwnProperties = function (obj) {
    return Object.getOwnPropertyNames(obj);
};


/**
  * Get object's own enumerable properties.
  *
  * @param {Object}  obj  Object to query for own property names.
  * @return {array}  Enumerable own properties of an object.
  *
  */
let getOwnEnumerableProperties = function (obj) {
  let result = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) result.push(p);
  }
  return result;
};