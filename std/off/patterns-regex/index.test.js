const re = require ("./");
const assert = require('assert');



describe('regex', function () {

    it(`matches multiline comments`, function () {
        let actual = `a,/* 
first*/ b,/* 
second*/ c/*
commmm
*/`;
        let expected = "a, b, c";
        assert.equal(actual.replace(re.mc, '').trim(), expected);
    });

    it(`matches line comments`, function () {
        let actual = `a, //endline
b//endline2`;
        let expected = "a, \nb";
        assert.equal(actual.replace(re.lc, '').trim(), expected);
    });

    it(`matches all comments`, function () {
        let actual = `a,/* 
first*/ b, //csscscr
c`;
        let expected = "a, b, \nc";
        assert.equal(actual.replace(re.ac, '').trim(), expected);
    });

    it(`matches whitespace`, function () {
        let actual = `  a,    
        b,      
    c `;
        let expected = "a, b, c";
        assert.equal(actual.replace(re.ws, ' ').trim(), expected);
    });

    it(`matches space`, function () {
        let actual = `  a,    b,      c `;
        let expected = "a, b, c";
        assert.equal(actual.replace(re.sp, ' ').trim(), expected);
    });

}); // end describe

