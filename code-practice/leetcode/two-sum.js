/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:
2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


Direct Link 
https://leetcode.com/problems/two-sum/
*/

// Solution 1
// Brute-force
const twoSum = function (nums, target) {
  let totalSum = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        totalSum.push(i, j);
      }
    }
  }
  return totalSum;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// Solution 2
// Using hash table / dic to store data
const twoSum1 = function (nums, target) {
  let numObj = {};
  let resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    // find out the difference of between the target and the current num
    let numDiff = target - nums[i];
    // check to see if numDiff is in numObj
    if (numDiff in numObj) {
      // add index to result arr
      resultArr.push(numObj[numDiff], i);
    } else {
      // Assign the value of index to numObj values
      numObj[nums[i]] = i;
    }
  }
  return resultArr;
};

console.log(twoSum1([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum1([3, 2, 4], 6)); // [1, 2]
console.log(twoSum1([3, 3], 6)); // [0, 1]
