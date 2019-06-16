/*
Make hierarchy

We have an array of objects (source array).
Each object (element) has 2 props: `id` and `parent`.
- The `id` (arbitrary string) identifies the object.
- The `parent` (constrained string) signifies relations between objects.
  - A child object specifies its parent (if any) by the parent's id.
  - The root object does not have a parent (specified with null).

The goal is to make a hierarchy/tree (an object), with root obj containing level2
object(s), which contains level3 object(s), etc., all the way down to the leaves,
which are childless.

Recursion to the rescue
- The makeHierarchy is a recursive fn that takes the source array and an
  optional (by default null) string param `par` (intended for parent id).
- First, the fn creates a new empty object, node = {}
- Then the souce array is filtered: a (sub)array is returned containing
  only the elements/objects that meet the certain condition; here it is to have
  parent prop equal to a certain value. Initially, this returns the array with 1
  element - the root i.e. the only element/obj whose `parent` prop is null.
- Next, each element of the returned (sub)array is processed: we get its id
  (string) and make it into a key of the `node` object, node[obj.id].
  Now, the value of the key is a subtree so we recurse.

Before we making the recursive call, the situation is this:
1: We've made a new empty obj
2: Filtered the source array and got back a subarray.
   This time the array has just one element - the root element/object.
3: We go through each element/object and retrieve its `id` (string), as `obj.id`.
   Then we use it as the key for the new property we're about to create in
   the `node` object: `node[obj.id]`.
4: But the property is not yet created as we also need to assing it a value;
   and that will have to wait...
The value that will be assign to the key will be supplied by the stack frame (when
it gets popped when the recursion ends). That frame will return an object that it
has bound to the `node` variable - but that `node` var is its local variable, not
the same `node` variable from the function's "original instance".

So, every recursive call will create a new `node` object with a specific key,
whose value will be assigned later.

Each recursive brach ends when the source array is filtered by matching the parent
prop with the ids that are not parents (leaf nodes), as that will return the
empty array.




1:   node = {}
2:   [ { id: "ani", p: null } ]
3:   node[obj.id]
4:   node[obj.id] = ...         node = { ani: ... }


{
    ani: {
        mam: {
            cat: {
                sia: null,
                per: null,
            },
            dog: {
                dob: null,
                rot: null,
            }
        }
    }
}

*/
let h = [
    { id: "ani", p: null },             // ch:1
        { id: "mam", p: "ani" },        // ch:2
            { id: "cat", p: "mam" },    // ch:2
                { id: "sia", p: "cat" },        // leaf
                { id: "per", p: "cat" },        // leaf
            { id: "dog", p: "mam" },    // ch:2
                { id: "dob", p: "dog" },        // leaf
                { id: "rot", p: "dog" },        // leaf
];

let makeHierarchy = (categories, par = null) => {
    let node = {};
    categories
        .filter(obj => obj.p === par)
        .forEach(obj => node[obj.id] = makeHierarchy(categories, obj.id));
    return node;
};

console.log(JSON.stringify(makeHierarchy(h), null, 4));

/*
let mkTree = (h) => {
    return ({
        [h[0].id]: {
            [h[1].id]: {
                [h[2].id]: {
                    [h[3].id]: null,
                    [h[4].id]: null,
                },
                [h[5].id]: {
                    [h[6].id]: null,
                    [h[7].id]: null,
                }
            }
        }
    });
};
console.log(mkTree(h));

let getTree = (h, par = null) => {
    let node = {};

    // get root obj
    let ani = h.filter(el => el.p === par);
    //  ani = [ { id: "ani", p: null } ]
    ani.forEach(obj => node[obj.id] = {});
    // node = { ani: {} }

    // get ani's children as mam
    let mam = h.filter(el => el.p === ani[0].id);
    mam.forEach(obj => node[ani[0].id][obj.id] = {});
    // node = { ani: { mam: {} } }

    return node;
};
*/




// alt: parentLookup
// ==============================================
// parse trees with parentLookup, so it only goes through the array once.
// Then search children by looking up from the parentLookup.
let parentLookup = h => h.reduce(
  (aggObj, elObj) => {
    aggObj[elObj.p] || (aggObj[elObj.p] = []);
    aggObj[elObj.p].push(elObj);
    return aggObj;
  }, {});

console.log(
    parentLookup(h)
);
