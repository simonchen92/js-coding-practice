// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Test Case
const list1 = [1, 2, 3, 1]

const list2 = [1, 2, 3, 4]

const list3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

// Solution
// Set can only store unique values. So we will write the function that Set.size is less than the array length to see if there are duplicates

const containsDuplicate = function (nums) {
  return new Set(nums).size < nums.length
}

console.log(containsDuplicate(list1))
console.log(containsDuplicate(list2))
console.log(containsDuplicate(list3))
