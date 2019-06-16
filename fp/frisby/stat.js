// stat param

let stat = (x) => {
  // 1: no param
  if (x == undefined) return "[stat] Missing param."
  
  //if typeof x.inspect === 'function') return x.inspect();


  // 1. get arity of f as n.
  // 2. return n unary functions,
  // 3. have the last function's body apply the 
  //    collected params to original function.
  // 4. return results of that
  let len = f.length;
  
  console.log ("this: " + this);
  console.log ("me: [" + mc.name + "]");
  console.log ("Received a function as param f, info:");
  console.log ("  f.name   : " + f.name);
  console.log ("  toString : " + f.toString());
  console.log ("  arity    : " + len);

  return len;
};




const inspector = (x) => {
    if (x && typeof x.inspect === 'function') {
        return x.inspect();
    }

    function inspectFn(f) {
        return f.name ? f.name : f.toString();
    }

    function inspectTerm(t) {
        switch (typeof t) {
          case 'string':
            return `'${t}'`;
          case 'object': {
            const ts = Object.keys(t).map(k => [k, inspect(t[k])]);
            return `{${ts.map(kv => kv.join(': ')).join(', ')}}`;
          }
          default:
            return String(t);
        }
    }

    function inspectArgs(args) {
        return Array.isArray(args) 
          ? `[${args.map(inspect).join(', ')}]` 
          : inspectTerm(args);
    }

    return (typeof x === 'function') 
      ? inspectFn(x) 
      : inspectArgs(x);
};
