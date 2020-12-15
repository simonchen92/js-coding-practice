/*
You are given an integer n consisting of digits 1, 2, and 3 and you can flip one digit to a 3. 
Return the maximum number you can make.

Example 1:
Input
n = 123
Output
323

Explanation
We flip 1 to 3

Example 2:
Input
n = 333
Output
333
Explanation
Flipping doesn't help.
*/

// Solution
const numFlip = (n) => {
  let numStr = n.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== '3') {
      return parseInt(numStr.replace(numStr[i], '3'));
    }
  }
  return n;
};

console.log(numFlip(123)); // 323
console.log(numFlip(333)); // 333
console.log(numFlip(311)); // 331
console.log(numFlip(213)); // 313
console.log(numFlip(321)); // 331
