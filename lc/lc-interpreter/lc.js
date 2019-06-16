const Lexer = require('./lcjs/lexer');
const Parser = require('./lang/parser');
const Interpreter = require('./lang/interpreter');

const fs = require('fs');
const util = require('util');

let filename;
let printAST = false;

if (process.argv[2] === '--ast') {
  printAST = true;
  filename = process.argv[3];
} else {
  filename = process.argv[2];
}

const source = fs.readFileSync(filename).toString();

const lexer = new Lexer(source);
const parser = new Parser(lexer);
const ast = parser.parse();

if (printAST) {
  const output = util.inspect(ast, {
    depth: null,
    colors: true,
  });
  console.log(output);
} else {
  console.log(Interpreter.eval(ast).toString());
}
