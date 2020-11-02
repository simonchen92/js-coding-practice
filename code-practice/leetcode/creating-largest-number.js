// Given a list of non negative integers, arrange them such that they form the largest number.

// Example 1:
// Input: [10,2]
// Output: "210"

// Example 2:
// Input: [3,30,34,5,9]
// Output: "9534330"

// Note: The result may be very large, so you need to return a string instead of an integer

// Direct Link to Leetcode Challenge
// https://leetcode.com/problems/largest-number/submissions/

// Solution
const largestNumber = function (nums) {
  nums = nums.sort((a, b) => `${b}${a}` - `${a}${b}`)
  return nums[0] === 0 ? '0' : nums.join('')
}

console.log(largestNumber([3, 30, 34, 5, 9]))
console.log(largestNumber([10, 2]))
console.log(largestNumber([0, 0]))
