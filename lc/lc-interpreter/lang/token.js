class Token {
  /**
   * `type`  is an element of the token types array below
   * `value` is optional, carries extra info about a token
   *         (e.g. name of an identifier)
   */
  constructor(type, value) {
    this.type  = type;
    this.value = value;
  }
};

// token types array
[
  'LPAREN', // (
  'LAMBDA', // λ
  'DOT',    // .
  'LCID',   // variable
  'RPAREN', // )
  'EOF',    // end of input
].forEach(token => Token[token] = token);

module.exports = Token;
