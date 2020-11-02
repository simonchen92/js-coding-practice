// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

// Solution 1 using XOR (bitwise) operator
// XOR operation works because it's like XORing all the numbers by itself and leaves the odd one out

const singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b, 0)
}

// Solution 2 using for loop to make it easier to understand but it has a O(n^2) time complexity due to the indexOf function

const singleNumberOne = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i]
    }
  }
}

module.exports = {
  singleNumber,
  singleNumberOne
}
