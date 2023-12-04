// write a function which helps to achive multiply (a) (b) and returns product of a and b

function multy(a, b) {
    return a * b;
  }
  
  const multiply = (num1) => (num2) => num1 * num2;
  
  console.log(multiply(2)(3));
  
  console.log(multy(2, 4));
  
  //write a curring function
  
  const add = (a) => (b) => a + b;
  const result = add(2)(3);
  console.log(result);
  
  //Curried functions aren't always closures, though they often are
  
  //Most useful curried functions need to use closures, but if the inner lambdas ignore the outer arguments, they aren't closures.
  
  //in this case is closure and curry funcition both 
  const curry = function (fn) {
      console.log(fn)
    let arity = fn.length;
    return function f1(...args) {
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return function f2(...moreArgs) {
          let newArgs = args.concat(moreArgs);
          return f1(...newArgs);
        };
      }
    };
  };
  
  const curriedSum = curry((a, b, c) => a + b + c);
  const particiallyCurriedSum = curriedSum(1)
  console.log(particiallyCurriedSum(2,3))
  
  
  //what curry functin do an dwhy do we need?
  
  