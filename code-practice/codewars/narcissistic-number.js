/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 
This may be True and False in your language, e.g. PHP.
Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

Direct Link
https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
*/

// Solution

function narcissistic(value) {
  // split the value and get the length of the value
  let digits = Array.from(String(value), Number);
  let digitLength = digits.length;
  // we want to raise the individual digits by the expononent of the length of the number
  // also get the total sum of the values
  let digit = digits.reduce(
    (acc, curr) => acc + Math.pow(curr, digitLength),
    0,
  );

  // if the value is equal to the total sum then return true
  if (value === digit) {
    return true;
  }
  // otherwise return false
  return false;
}

console.log(narcissistic(7)); // true
console.log(narcissistic(371)); // true
console.log(narcissistic(1652)); // false
console.log(narcissistic(153)); // true