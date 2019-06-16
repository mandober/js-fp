/**
 * Collect defining aspects of the object:
 *   1) get array of own prop names (without values); stringify it
 *   2) stringify object to name/value pairs (excludes functions)
 *   3) methods: get all methods, convert them to source, copare them
 *   4) prototype chain, constructors, prototypes
 *
 */
function fingerprint(obj) {

    // get array of own prop names
    var gop = Object.getOwnPropertyNames(obj);
    console.log('Object.getOwnPropertyNames', gop);

    // get array of own prop symbols
    var gos = Object.getOwnPropertySymbols(obj);
    console.log('Object.getOwnPropertySymbols: ', gos);

    // get array of own prop names and symbols
    var gok = Reflect.ownKeys(obj);
    console.log('Reflect.ownKeys: ', gok);

    var ok = Object.keys(obj);
    console.log('Object.keys: ', ok);

    var oe = Object.entries(obj);
    console.log('Object.entries: ', oe);


    // get array of own methods
    var gom = (obj) => Object.keys(obj).filter(key => typeof (obj[key]) == 'function');



    // PROPS
    // stringify object to name/value pairs (excludes functions)
    // var jobj = JSON.stringify(ok);
    // console.log('jobj', jobj);
    // FUNCTIONS
    // aspect 3: methods: get all methods, convert them to source(toSource())

    // return cat'ed stringified aspects
    // return gop + jobj;
}


if (typeof module !== undefined) module.exports = fingerprint;

