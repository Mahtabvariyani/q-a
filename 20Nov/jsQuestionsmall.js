const arr = ["Apple", "banana", "Orange"];
arr.unshift("Tokiyo", "oslo");

console.log(arr);

var foo = 10 + "20";

console.log(foo);

console.log(0.1 + 0.2 == 0.3);
//the are not exactly equel to eachother due to the floating number




//here we have clousure function it remember s the x from outer funtion and we get another function and another functionality with inn inner function
function add(x, y) {
  if (arguments.length === 2) {
    return x + y;
  } else if (arguments.length === 1) {
    return function (y) {
      return x + y;
    };
  }
}

console.log(add(2, 5))
console.log(add(2)(5))



//what the value would return from this action 


const num = "this is Mahtab from Karaj".split("").reverse().join("")

console.log(num)




///What would be the out come of this ???

//the out come is Hello WOrld


// let fooo = "Hello";
// (function() {
//   let bar = " World";
//   alert(fooo + bar);
// })();
// alert(fooo + bar);



//what is going to be the length
let nam = []
nam.push(1)
nam.push(2)

console.log(nam.length)




let sum = {n:1}
let sum2 = sum


sum.x = sum = {n:2}

console.log(sum.x)



//the out put of 


// One four three two

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');




(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

  //becouse the b is global variable but a is locla variable



  function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo1()) // it returns the Hwllo
console.log(foo2()) // becouse the return line and {} ar enot same



//the && prints the second item and the || prints the first one 
console.log("hello" || "world")
console.log("foo" && "bar")