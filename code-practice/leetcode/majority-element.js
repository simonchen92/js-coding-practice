// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

// Solution 1
// Time complexity of this solution is O(n^2) since there is two for loops being used.

const majorityElement = function (nums) {
  const counts = {}
  // loop through the array
  for (const num of nums) {
    // if the number exist in counts object then add 1, otherwise the value is 1
    if (counts[num]) {
      counts[num]++
    } else {
      counts[num] = 1
    }
  }

  // loop through the counts object
  for (const key in counts) {
    // if the value exist in counts is greater than [n/2] times then return the value
    if (counts[key] > nums.length / 2) {
      return key
    }
  }
}

module.exports = majorityElement
