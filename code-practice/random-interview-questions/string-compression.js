/*
If given a string, please compress the letters to number of occurrence.

Example:

str = "aaaaaa" 
output = "a6"

str = "aabcccccaaa"
output = "a2b1c5a3"
*/

// Solution

const strComp = (string) => {
  let compressed = "";
  let currChar = "";
  let currCount = "";
  let maxCount = 1;

  for (let i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      compressed = compressed + currChar + currCount;
      maxCount = Math.max(maxCount, currCount);
      currChar = string[i];
      currCount = 1;
    } else {
      currCount++;
    }
  }
  compressed = compressed + currChar + currCount;
  maxCount = Math.max(maxCount, currCount);


  return maxCount === 1 ? string : compressed;
};

console.log(strComp("aaaaaa"), "a6");
console.log(strComp("aabcccccaaa"), "a2b1c5a3");
