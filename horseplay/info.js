// get info about the param
export const info = (f) => {

  // 1: no param
  if (f === 'undefined') return "[stat] Missing param."

  // 2: !function
  if (f !== 'function') return "[stat] Not a function param."

  // 3: function
  if (f === 'function') return "[stat] Function param."


  // 1. get arity of f as n.
  // 2. return n unary functions,
  // 3. have the last function's body apply the
  //    collected params to original function.
  // 4. return results of that
  let len = f.length;

  console.log ("me: [" + info.name + "]");
  console.log ("  this: " + this);

  console.log ("Info:");
  console.log ("  f.name   : " + f.name);
  console.log ("  toString : " + f.toString());
  console.log ("  arity    : " + len);

  return len;
};


//@goal Get info about the param
//@question Get info about the param
//@action

const getInfo = (f) => {
  let outStr = [];

  // 0: param
  outStr.push(`The param supplied is: »{$f}«`);

  // 1a: no param
  if (f === 'undefined') outStr.push("The param is undefined (missing)");
  //                   return "[stat] The param is undefined (missing)."
  // 1b: null
  if (f === 'null') outStr.push("The param is null.");

  // 1b: null
  if (!f) outStr.push("The param is falsey.");

  // 2: !function
  if (typeof(f) !== 'function') return "[stat] Not a function param."

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

  console.log ("me: [" + info.name + "]");
  console.log ("  this: " + this);

  console.log ("Info:");
  console.log ("  f.name   : " + f.name);
  console.log ("  toString : " + f.toString());
  console.log ("  arity    : " + len);

  return len;
};


console.log ("Info: "+getInfo(1));
