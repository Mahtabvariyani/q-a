'use strict'

for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0,
      b = i % 5 == 0;
    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
  }


  /* 
  This line uses the ternary conditional operator (? :) to determine what to output based on the values of f and b.

If f is true, it checks b. If b is true, it prints 'FizzBuzz'; otherwise, it prints 'Fizz'.
If f is false, it checks b. If b is true, it prints 'Buzz'; otherwise, it prints the current number (i).
  
  
  */