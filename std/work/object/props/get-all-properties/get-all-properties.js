/**
  * Get all (distinct) ENUMERABLE properties of an object (default, e=0)
  * Get all (distinct) NON-ENUMERABLE properties of an object (e=1)
  * Get all (distinct) EITHER (enumerable and non-enumerable) properties of an object (e=2)
  *
  * Bitmask: enumerable (4), writable (2), configurable (1). Default bitmask is 4.
  * Example: bitmask=4 -> enumerable (true), writable (false), configurable (false)
  *
  * @param {object}   obj  Object to query.
  * @param {boolean}  e    Return ALL properties: enumerable(0), non-enumerable(1), either(2)
  * @return {array}   Propery names.
  *
  */
function getAllProperties(obj, bitmask = 4) {
    let result = [];

    // NON-ENUMERABLE(1)
    if (e === 1) {
        let all = getAllProperties(obj, 2);
        let enumer = getAllProperties(obj);
        let result = _.xor(all, enumer);
        return result;
    }

    // while obj is not the end of prototype chain i.e. null
    while (obj) {
        if (!e) {
            // ENUMERABLE(0)
            for (let p in obj) {
                if (obj.hasOwnProperty(p)) result.push(p);
            }
        } else {
            // EITHER(2)
            result = result.concat(Object.getOwnPropertyNames(obj));
        }
        obj = Object.getPrototypeOf(obj);
    }
    // keep only DISTINCT properties
    return [...(new Set(result))];
};



function getAllProp(obj) {
    const props = new Set();
    do {
        for (let key of Object.getOwnPropertyNames(obj)) {
            props.add(key);
        }
    } while ((obj = Object.getPrototypeOf(obj)));
    return props;
};