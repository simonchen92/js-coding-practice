// Your task is to make a function that can take any non-negative integer as a argument and return the largest number.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445
// Output: 54421

// Input: 145263
// Output: 654321

// Input: 123456789
// Output: 987654321

// Test Case
const test = 21445
const test1 = 145263
const test2 = 123456789

function largestNum (n) {
  let nums = ('' + n).split('').sort(function (a, b) { return b - a })
  nums = nums.join('')
  return Number(nums)
}

console.log(largestNum(test))
console.log(largestNum(test1))
console.log(largestNum(test2))
