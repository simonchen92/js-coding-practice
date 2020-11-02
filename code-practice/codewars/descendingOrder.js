// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445
// Output: 54421

// Input: 145263
// Output: 654321

// Input: 123456789
// Output: 987654321

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/descending-order/train/javascript

// Test Case
const test = 21445
const test1 = 145263
const test2 = 123456789

// Solution
function descendingOrder (n) {
  let nums = ('' + n).split('').sort(function (a, b) { return b - a })
  nums = nums.join('')
  return Number(nums)
}

console.log(descendingOrder(test))
console.log(descendingOrder(test1))
console.log(descendingOrder(test2))
