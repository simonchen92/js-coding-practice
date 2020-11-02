/**
It is guaranteed that the insertion operations will be valid.

Example 1:
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]

Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

Example 2:
Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]

Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]

Example 3:
Input: nums = [1], index = [0]
Output: [1]

Constraints:
1 <= nums.length, index.length <= 100
nums.length == index.length
0 <= nums[i] <= 100
0 <= index[i] <= i

Direct Link
https://leetcode.com/problems/create-target-array-in-the-given-order/
 */

// Solution

let createTargetArray = function (nums, index) {
  let result = [];
  for (let num of nums) {
    let shift = index.shift();
    result.splice(shift, 0, num);
  }
  return result;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // [0,4,1,3,2]
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])); // [0,1,2,3,4]
console.log(createTargetArray([1], [0])); // [1]
