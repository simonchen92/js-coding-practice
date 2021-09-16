/*
You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect square

Direct Link
https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
*/

// Solution

function findNextSquare(sq) {
  // if the number given is a perfect square root
  let num = Math.sqrt(sq);
  // if it is, then take number + 1 and multiply by itself to get number
  if (num % 1 === 0) {
    return Math.pow(num + 1, 2);
  }
  // if it is not, then return -1
  return -1;
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); // -1
