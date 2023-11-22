Question =
  "write a function which gets an array and an element and returns a array with this element at the end ";

//begginer

const append = (arr, el) => {
  return [...arr, el];
};

console.log(append([2, 4, 5, 5], 5));



// dont use the .push bcz it modifies the old array but in most cases is better approach that we make a new array


