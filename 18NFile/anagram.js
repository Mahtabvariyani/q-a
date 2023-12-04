/* 
in this question we check if its given input is an Anagram or not 

what is an Anagram("
anagram question in JavaScript typically involves checking if two strings have the same set of characters, just arranged in a different order. Here's a short explanation:
")

*/

const isAnagram = function (num1, num2) {
  num1 = num1.split("").sort().join("");
  num2 = num2.split("").sort().join("");

  return num1 === num2;
};



const result1 = isAnagram('car', 'silent');
console.log(result1);