/*
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

Direct Link
https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
*/

// Solution

function digital_root(n) {
  let result = 0;

  String(n)
    .split("")
    .map((num) => {
      result += Number(num);
    });

  return result >= 10 ? digital_root(result) : result;
}

console.log(digital_root(16)); // 7
console.log(digital_root(942)); // 6
console.log(digital_root(132189)); // 6
console.log(digital_root(493193)); // 2

// Clever Solution

function digital_root1(n) {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split("")
      .reduce((acc, curr) => {
        // +curr converts the variable (currently a string) to a number
        return acc + +curr;
      }, 0),
  );
}

console.log(digital_root1(16)); // 7
console.log(digital_root1(942)); // 6
console.log(digital_root1(132189)); // 6
console.log(digital_root1(493193)); // 2
