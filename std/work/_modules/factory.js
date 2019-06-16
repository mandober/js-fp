// export library boilerplate

// Off


(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Off = factory());

}(this, function () {
    'use strict';

    //...library start
    var SLICE$0 = Array.prototype.slice;

    //..
    //...library meat
    //..

    //...library export
    var Off = {
        Iterable: Iterable,
        Seq: Seq,
        Collection: Collection,
        Map: Map,
        OrderedMap: OrderedMap,
        List: List,
        Stack: Stack,
        Set: Set,
        OrderedSet: OrderedSet,
        Record: Record,
        Range: Range,
        Repeat: Repeat,
        is: is,
        fromJS: fromJS
    };
    return Off;
}));
