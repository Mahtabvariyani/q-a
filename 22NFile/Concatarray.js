'use strict'

//write a function which concat the 2 array



// the first bad approach

const arr1 = [1, 2, 3, 4];
const arr2 = [9, 8, 7];

const arrSum = (arr1, arr2) => {
  arr1.push(...arr2);

  return arr1;
};
const result = arrSum(arr1,arr2)


console.log(result);



//the second approach

const concatArr = (arr1, arr2) => {
   return arr1.concat(...arr2);
  };

  const result2 = concatArr(arr1, arr2);
  console.log(result2)


  //the best of best approach


  const finalSum = (arr1,arr2)=> {
    return [...arr1,...arr2]

  }

const best = finalSum(arr1,arr2)
  console.log(best)