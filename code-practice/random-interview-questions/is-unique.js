/*
Check if the string character contains all unique character. 
Return true if all unique else return false.
*/

// Solution 1

const everyCharUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let next = str[i + 1];
    if (curr === next) {
      return false;
    }
  }
  return true;
};


console.log(everyCharUnique("abcd"), "true");
console.log(everyCharUnique("abccd"), "false");
console.log(everyCharUnique("bhjjb"), "false");
console.log(everyCharUnique("mdjq"), "true");

// Solution 2
// Using hash map

const isUnique = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
      if (obj[str[i]] && obj[str[i]] >= 1) {
          return false;
      } else {
          obj[str[i]] = 1;
      }
  }
  return true;
};

console.log(isUnique("abcd"), "true");
console.log(isUnique("abccd"), "false");
console.log(isUnique("bhjjb"), "false");
console.log(isUnique("mdjq"), "true");