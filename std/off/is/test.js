'use strict';
const is = require('./');
const assert = require('chai').assert;


//* ========================= nothings =========================
describe('nothings', function () {

    it(`is.undef(void 0)`, function () {
        let actual = is.undef(void 0);
        assert.equal(actual, true);
    });

    it(`is.nil(null)`, function () {
        let actual = is.nil(null);
        assert.equal(actual, true);
    });

    it(`is.nothing(null)`, function () {
        let actual = is.nothing(null);
        assert.equal(actual, true);
    });

    it(`is.nothing(void 0)`, function () {
        let actual = is.nothing(void 0);
        assert.equal(actual, true);
    });

    it(`is.nothing(0)`, function () {
        let actual = is.nothing(0);
        assert.equal(actual, false);
    });



    it(`is.nothing("")`, function () {
        let actual = is.nothing("");
        assert.equal(actual, true);
    });

    it(`is.nothing(new String(""))`, function () {
        let actual = is.nothing(new String(""));
        assert.equal(actual, true);
    });


    it(`is.string("")`, function () {
        let actual = is.string("");
        assert.equal(actual, true);
    });

    it(`is.string(new String(""))`, function () {
        let actual = is.string(new String(""));
        assert.equal(actual, true);
    });

    it(`is.emptyString("")`, function () {
        let actual = is.emptyString("");
        assert.equal(actual, true);
    });

    it(`is.emptyString(new String(""))`, function () {
        let actual = is.emptyString(new String(""));
        assert.equal(actual, true);
    });


}); //end



//* ========================= types =========================
describe('types', function () {


    it(`is.boolean(false)`, function () {
        let actual = is.boolean(false);
        assert.equal(actual, true);
    });

    it(`is.string("0")`, function () {
        let actual = is.string("0");
        assert.equal(actual, true);
    });

    it(`is.number(123)`, function () {
        let actual = is.number(123);
        assert.equal(actual, true);
    });

    it(`is.symbol(Symbol('test'))`, function () {
        let actual = is.symbol(Symbol('test'));
        assert.equal(actual, true);
    });

    it(`is.primitive(21)`, function () {
        let actual = is.primitive(21);
        assert.equal(actual, true);
    });

    it(`is.object([])`, function () {
        let actual = is.object([]);
        assert.equal(actual, true);
    });

    it(`is.object(new Number(22))`, function () {
        let actual = is.object(new Number(22));
        assert.equal(actual, false);
    });


}); //end


//* ========================= primitives 2 =========================
describe('primitives 2', function () {

    it(`is.alpha("abcd_")`, function () {
        let actual = is.alpha("abcd_");
        assert.equal(actual, true);
    });

}); // end describe



//* ========================= undefined =========================
describe('undefined', function () {

    it(`is.undef(): declared, but uninitilized`, function () {
        let actual;
        assert.equal(is.undef(actual), true);
    });

    it(`is.undef()`, function () {
        assert.equal(is.undef(), true);
    });

    it(`is.undef(undefined)`, function () {
        let actual = undefined;
        assert.equal(is.void(actual), true);
    });

    it(`is.undef("undefined")`, function () {
        let actual = "undefined";
        assert.equal(is.u(actual), false);
    });

    it(`is.undef(void 0)`, function () {
        let actual = void 0;
        assert.equal(is.void(actual), true);
    });

    it(`is.undef(null)`, function () {
        let actual = null;
        assert.equal(is.u(actual), false);
    });

}); // end describe


//* =========================== arrays ==========================
describe('arrays', function () {

    it(`is.array`, function () {
        let actual = [1,2,3];
        assert.equal(is.array(actual), true);
    });

    it(`is.array`, function () {
        let actual = "123";
        assert.equal(is.array(actual), false);
    });

    it(`is.arrayLike`, function () {
        assert.equal(is.arrayLike(arguments), true);
    });

    it(`is.nestedArray`, function () {
        let actual = [1, 2, 3];
        assert.equal(is.nestedArray(actual), false);
    });

    it(`is.nestedArray`, function () {
        let actual = [1, [2, 3]];
        assert.equal(is.nestedArray(actual), true);
    });


}); // end describe


//* =========================== PRIMITIVES ==========================
describe(`is.primitive(undefined)`, function () {
    
    it(`undefined`, function () {
        let actual = is.primitive(undefined);
        assert.equal(actual, true);
    });

    it(`is.primitive("undefined")`, function () {
        let actual = is.string("undefined");
        assert.equal(actual, true);
    });

});



/*
var samples = [
    {
        id: "string",
        actual: "abcd",
        expected: "abcd",
    },
    {
        id: "pojo",
        actual: { a: 1 },
        expected: { a: 1 },
    },
    {
        id: "empty pojo",
        actual: {},
        expected: {},
    },
];


describe('is', function () {
    samples.forEach(function (test) {
        it(`${test.id}`, function () {
            let actual = is.undef(test.actual());
            //let expected = test.expected;
            assert.equal(actual, false);
        });
    });
});

*/