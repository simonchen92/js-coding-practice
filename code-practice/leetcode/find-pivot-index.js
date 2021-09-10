/*
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.

Example 1:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Example 2:
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Example 3:
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:
1 <= nums.length <= 104
-1000 <= nums[i] <= 1000

Direct Link
https://leetcode.com/problems/find-pivot-index/
*/

// Solution 1

const pivotIndex = function(nums) {
  let totalSum = 0;
  // Get the total sum to use to check for difference
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  let leftSum = 0;
  // We are checking the left sum by adding all the elements and subtract total sum
  // If remainder is equal to our left sum then we found our pivot index
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) leftSum += nums[i - 1];
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0

// Solution 2

const pivotIndex2 = function(nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((acc, curr) => acc + curr, 0);

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Subtract right sum from current num
    rightSum -= nums[i];
    // Check to see if right sum is equal to left sum and return the index if it is
    if (rightSum === leftSum) {
        return i;
    }
    // If not equal then add current num to left sum
    leftSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex2([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex2([1, 2, 3])); // -1
console.log(pivotIndex2([2, 1, -1])); // 0
