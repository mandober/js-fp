// currying
export default function curry(originalFunction, initialParams = []) {
  //debugger;
  return (...nextParams) => {
      //debugger;
      const curriedFunction = (params) => {
          //debugger;
          if (params.length === originalFunction.length) {
              return originalFunction(...params);
          }
          return curry(originalFunction, params);
      };
      return curriedFunction([...initialParams, ...nextParams]);
  };
};

// function cu() {
//     return function() {
//         return 12;
//     }
// }

// exports.cu = cu;

// export default curry;
