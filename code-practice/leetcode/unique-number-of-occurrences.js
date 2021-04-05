/*
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true


Constraints:
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

Direct Link
https://leetcode.com/problems/unique-number-of-occurrences/
*/

// Solution
var uniqueOccurrences = function (arr) {
  let count = {};

  for (const num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  // Looking at only the unique occurrence of the values
  let occurrences = Object.values(count);

  // Create a new set from the unique values of occurrences and remove the duplicate values since they will not be considered unique
  let uniqueFrequency = new Set(occurrences);

  // Compare the length of occurrences to the size of set
  return occurrences.length === uniqueFrequency.size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
