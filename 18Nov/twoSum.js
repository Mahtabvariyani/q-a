/* 
in this question we have 2 sum like we have an array of 
numbers and we have target which is the sum of 2 numbers 
existing in the array

*/

// const sumTwo = function (numArray, target) {
//     for (let i = 0; i < numArray.length; i++) {
//       for (let j = 0; j < target.length; j++) {
//         if (numArray[i] + numArray[j] === target) return [i, j];
//       }
//     }
//   };
  
//   console.log(sumTwo([2,7,11,15], 9));


const sumTwo = function (numArray, target) {
    for (let i = 0; i < numArray.length; i++) {
      for (let j = i + 1; j < numArray.length; j++) {
        if (numArray[i] + numArray[j] === target) return [i, j];
      }
    }
  };
  
  console.log(sumTwo([2, 7, 11, 15], 9));
  