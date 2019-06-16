'use strict';

const unique = (arr) =>
    arr.reduce((acc, el) =>
        acc.includes(el) ? acc : (acc.push(el), acc)
    , []);

module.exports = unique;


