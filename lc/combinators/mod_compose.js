// COMPOSITION


var C = (f, g) => (...x) => x.map(g).map(f);

const compose = f => g => (...x) => f(g(x[0]));

