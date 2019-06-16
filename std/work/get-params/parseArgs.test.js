// I usually use mocha as the test runner and chai as the assertion library
describe('Extracts argument names from function signature. 💪', () => {
    const test = (func) => {
        const expectation = ['it', 'parses', 'me'];
        const result = parseFunctionArguments(toBeParsed);
        result.should.equal(expectation);
    }

    it('Parses a function declaration.', () => {
        function toBeParsed(it, parses, me) { };
        test(toBeParsed);
    });

    it('Parses a functional expression.', () => {
        const toBeParsed = function (it, parses, me) { };
        test(toBeParsed);
    });

    it('Parses an arrow function', () => {
        const toBeParsed = (it, parses, me) => { };
        test(toBeParsed);
    });

    // ================= cases not currently handled ========================

    // It blows up on this type of messing. TBH if you do this it deserves to
    // fail 😋 On a tech note the params are pulled down in the function similar
    // to how destructuring is handled by the ast.
    it('Parses complex default params', () => {
        function toBeParsed(it = 4 * (5 / 3), parses, me) { }
        test(toBeParsed);
    });

    // This passes back ['_ref'] as the params of the function. The _ref is a
    // pointer to an VariableDeclarator where the ✨🦄 happens.
    it('Parses object destructuring param definitions.'() => {
        function toBeParsed ({ it, parses, me }){}
        test(toBeParsed);
});

it('Parses object destructuring param definitions.'() => {
    function toBeParsed ([it, parses, me]){}
        test(toBeParsed);
    });

// Classes while similar from an end result point of view to function
// declarations are handled completely differently in the JS AST.
it('Parses a class constructor when passed through', () => {
    class ToBeParsed {
        constructor(it, parses, me) { }
    }
    test(ToBeParsed);
});
});
