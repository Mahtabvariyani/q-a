//removve the duplicate in an array

//we use set its a method that we get the uniqe value 
const uniqarr = (arr) => {
    return [...new Set(arr)
    ]
}

const stringArrayWithDuplicates = ["apple", "orange", "banana", "apple", "grape", "banana", "kiwi"];


const arr = [2,4,5,4,3,2,1,6,5,4]
const objectArrayWithDuplicates = [
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "banana" },
    { id: 1, name: "apple" }, // Duplicate ID
    { id: 4, name: "grape" },
    { id: 3, name: "banana" }, // Duplicate ID
    { id: 5, name: "kiwi" },
  ];
  

console.log(uniqarr(objectArrayWithDuplicates))



