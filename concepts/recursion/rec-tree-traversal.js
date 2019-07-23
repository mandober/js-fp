/*
Recursion: traversing tree nodes
*/

let h = [
    { id: "ani", p: null },
        { id: "mam", p: "ani" },
            { id: "cat", p: "mam" },
                { id: "sia", p: "cat" },
                { id: "per", p: "cat" },
            { id: "dog", p: "mam" },
                { id: "dob", p: "dog" },
                { id: "rot", p: "dog" },
];


let makeTree = (h) => {
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


let getLevel = (h, lvl) => h.filter( ({_,p}) => p == lvl);
// console.log(getLevel(h, null));

let [{id: root,}] = getLevel(h, null);
// console.log(root);


console.log(makeTree(h));

/*
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
