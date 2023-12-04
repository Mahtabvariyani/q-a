//Palindrom Number if its true or not
// imagine that we have 2 difrent numbers and we want to check ,which one of then is palindrom or not ...

//First input is (10)
//second input is (121)

/* (Explanation) => {
    so what are we doing here is first of all saying return it and check if the number is palindrom but before that we have to change the munber to string so our hands are more open to check around and then when we changed the number to string we have to split it and we do it with .split() afte that we reverse it  to check the numbers after checkinf we join it and make it again a string but for the returning we add a plus so that means if its a pure number and without any other value its gonna give number again  (if possible)

    * we can also make it better with putting a condition for it like 
    * if x < 0 ? false : => rund the opration like the below   



}*/

const isPalindrom = function (num) {
  return num === +num.toString().split("").reverse().join("");


};


const result = isPalindrom(131)
console.log(result)
const x = 20
x.toString().split("")
console.log(+x.toString().split("").reverse().join(''))