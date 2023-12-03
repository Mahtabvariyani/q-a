const words = [
    "mystery",
    "brother",
    "aviator",
    "crocodile",
    "pearl",
    "orchard",
    "crackpot",
  ];
  
  // const longest = words.reduce(function (a, b) {
  //   return a.length > b.length ? a : b;
  // });
  
  // console.log(longest);
  
  const LongestWord = words.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
  
  console.log(LongestWord);
  
  //Sum of the numbers
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  
  const sum = numbers.reduce((a, b) => a + b);
  
  console.log(sum);
  