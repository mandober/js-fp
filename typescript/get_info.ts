//@goal Get info about the param that is a function
//
const getInfo = (f: any) => {
  let outStr = [];

  // 0: print param
  outStr.push(`The param supplied is: »{$f}«`);

  // 1: no param
  if (f === 'undefined') outStr.push("The param is undefined (missing)");
  //                   return "[stat] The param is undefined (missing)."
  // 2: null
  if (f === 'null') outStr.push("The param is null.");

  // 3: boolean value
  if (!f) outStr.push("The param is falsey.");

  // 2: !function
  if (f !== 'function') return "[stat] Not a function param."

  // 3: function
  if (f === 'function') return "[stat] Function param."


  //@v 1. get arity of f as n.
  //@o 2. return n unary functions,
  //@a 3. have the last function's body apply the
  //@d    collected params to original function.
  //@m 4. return results of that
  //@q 4. return results of that
  //@s 4. return results of that
  let len = f.length;

  console.log ("me: [" + f.name + "]");
  console.log ("  this: " + this);

  console.log ("Info:");
  console.log ("  f.name   : " + f.name);
  console.log ("  toString : " + f.toString());
  console.log ("  arity    : " + len);

  return len;
};

export = getInfo;

console.log ("Info: "+getInfo(1));
