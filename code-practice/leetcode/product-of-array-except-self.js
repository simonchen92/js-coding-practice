/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

Direct Link
https://leetcode.com/problems/product-of-array-except-self/
*/

// Solution

const productExceptSelf = function(nums) {
  let result = [];
  let leftMultiplier = 1;
  let rightMultiplier = 1;

  // Calculate the right output multiplier coming from the right side
  for (let i = nums.length - 1; i >= 0; i--) {
    // right array
    result[i] = rightMultiplier;
    rightMultiplier *= nums[i];
  }

  // To create a linear solution, we removed the step to loop through left array
  // We multiply the right and left array together to get results
  for (let j = 0; j < nums.length; j++) {
    // left array * right array
    result[j] *= leftMultiplier;
    leftMultiplier *= nums[j];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]

// Alternate Solution
// More readable

const productExceptSelf1 = function(nums) {
  let leftArr = [];
  let leftMultiplication = 1;

  for (let i = 0; i < nums.length; i++) {
    leftArr[i] = leftMultiplication;
    leftMultiplication *= nums[i];
  }

  let rightArr = [];
  let rightMultiplication = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr[i] = rightMultiplication;
    rightMultiplication *= nums[i];
    rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
  }

  return rightArr;
};

console.log(productExceptSelf1([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf1([-1, 1, 0, -3, 3])); // [0,0,9,0,0]