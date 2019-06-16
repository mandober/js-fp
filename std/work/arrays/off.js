var Off = function(off) {
    'use strict';
    // meta
    const version = "0.0.1.170607";
    var off = off || {};
    off.array = {
        methods(){
            return "head,peak,tail,last,collapseOne,concatAll,pack,rotate,flatten".split(',');
        }
    };

    // methods
    off.array.peak = off.array.head = function(arr) {
        var head = require('./head/');
        return head(arr);
    };

    off.array.last = off.array.tail = function (arr) {
        var last = require('./tail/');
        return last(arr);
    };

    off.array.collapseOne = off.array.concatAll = function (arr) {
        var collapseOne = require('./concat-all/');
        return collapseOne(arr);
    };

    off.array.pack = function (arr) {
        var pack = require('./pack/');
        return pack(arr);
    };

    off.array.rotate = function (arr) {
        var rotate = require('./rotate/');
        return rotate(arr);
    };

    off.array.flatten = function (arr) {
        var flatten = require('./flatten/');
        return flatten(arr);
    };

    off.array.mapWith = function (arr) {
        var mapWith = require('./mapwith/');
        return mapWith(arr);
    };




    // ~ the end ~
    return off;
}(Off || {});


if (typeof module !== undefined) module.exports = Off;
