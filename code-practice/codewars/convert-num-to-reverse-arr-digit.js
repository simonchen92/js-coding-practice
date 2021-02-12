/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

Direct Link
https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
*/

// Solution

function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((num) => {
      return parseInt(num);
    });
}

console.log(digitize(35231)); // [1, 3, 2, 5, 3]
console.log(digitize(348597)); // [7, 9, 5, 8, 4, 3]
