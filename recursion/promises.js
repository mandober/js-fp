/*
Crockford on JavaScript - Act III: Function the Ultimate

https://www.youtube.com/watch?v=ya4UHuXNygM

Implementing makePromise function.

The makePromise function returns an object with 5 methods.

"Any number of the methods could be sent to a webservice, e.g. we can send
an object with `when` and `fail` methods. You can then pass to the `when`
method the thing you want to call if the promise is fullfilled. You can also
pass functions to `fail` method in case the promise was not fullfilled. It'll
just sit on all those things until it knows what the disposition is." WTF


*/
function makePromise() {
    // initially unresolved, it could become 'fullfilled' or 'failed'
    let status = 'unresolved';

    // when we know what the value is, we'll put it here
    let outcome;

    // the list of fns registered with `when`
    let waiting = [];

    // the list of fns registered with `fail`
    let dreading = [];

    function vouch(deed, func) {
        // vouch will examine the status,
        switch (status) {
            // if it is still unresolved, it will put the deed on one of the two fns
            // lists. Which list (waiting or dreading), depends on what the deed is.
            case 'unresolved':
                (deed === 'fullfilled' ? waiting : dreading).push(func);
                break;
            // if the current state of the promise matches the deed,
            // it is executed.
            case deed:
                func(outcome);
                break;
        }
    }

    function resolve(deed, value) {}

    return {
        when: function (func) {
            vouch('fullfilled', func);
        },
        fail: function (func) {
            vouch('smashed', func);
        },
        fullfill: function (value) {
            vouch('fullfilled', value);
        },
        smash: function (string) {
            vouch('fullfilled', string);
        },
        status: function () {
            return status;
        }
    };
}
