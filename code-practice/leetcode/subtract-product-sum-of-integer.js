/**
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Example 1:
Input: n = 234
Output: 15 

Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

Example 2:
Input: n = 4421
Output: 21

Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
 

Constraints:
1 <= n <= 10^5

Direct Link
https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 */

// Solution 1 using string split method

let subtractProductAndSum = function (n) {
  let product = n
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a * b);
  let sum = n
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);
  return product - sum;
};

console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(4421)); // 21

// Solution 2 using Array.from method instead

let subtractProductAndSum1 = function (n) {
  let product = Array.from(n.toString())
    .map(Number)
    .reduce((a, b) => a * b);
  let sum = Array.from(n.toString())
    .map(Number)
    .reduce((a, b) => a + b);
  return product - sum;
};

console.log(subtractProductAndSum1(234)); // 15
console.log(subtractProductAndSum1(4421)); // 21

// Solution 3 using modulo to create a single digits

let subtractProductAndSum2 = function (n) {
  let product = 1;
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    product *= digit;
    sum += digit;
    n = Math.floor(n / 10);
  }
  return product - sum;
};

console.log(subtractProductAndSum2(234)); // 15
console.log(subtractProductAndSum2(4421)); // 21
