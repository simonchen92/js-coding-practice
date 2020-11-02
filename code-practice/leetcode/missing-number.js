// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2

// Example 2:
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Solution

const missingNumber = function (nums) {
  let num = 0
  let expectedNum = nums.length
  for (let i = 0; i < nums.length; i++) {
    num += nums[i]
    expectedNum += i
  }
  return expectedNum - num
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(missingNumber([6, 4, 2, 3, 7, 0, 1]))
