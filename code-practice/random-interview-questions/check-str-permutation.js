/*
Check if the str value contains a permutation of given string
*/

// Solution

const checkPermute = (stringOne, stringTwo) => {
  // check if length are the same and if they are not, then return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    // Sort the string so if they are the same then return true
    let sortedStringOne = stringOne.split("").sort().join("");
    let sortedStringTwo = stringTwo.split("").sort().join("");
    // Comparison operator that returns boolean
    return sortedStringOne === sortedStringTwo;
  }
};

console.log(checkPermute("aba", "aab"), true);
console.log(checkPermute("aba", "aaba"), false);
console.log(checkPermute("aba", "aa"), false);
