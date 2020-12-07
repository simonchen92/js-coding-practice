/*
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:
      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1

Note:
The size of the given array will be in the range [1,1000].

Direct Link
https://leetcode.com/problems/maximum-binary-tree/
*/

// Class definition for a Binary Tree Node
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Solution 1
// Easier Solution to understand
let constructMaximumBinaryTree = function (nums) {
  // Return null if length of array is empty
  if (nums.length < 1) {
    return null;
  }
  // Find the maximum value given in the array
  let root = new TreeNode(Math.max(...nums));
  // Find index of our max value
  let rootIndex = nums.findIndex((num) => num == root.val);
  // Use recursion to find maximum value or left and right sub arrays
  // root.left finds the value from the left of the given array up to the max value
  root.left = constructMaximumBinaryTree(nums.slice(0, rootIndex));
  // root.right finds the value from the number from the right of the max value up to the end of the array
  root.right = constructMaximumBinaryTree(
    nums.slice(rootIndex + 1, nums.length),
  );
  return root;
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));

// Solution 2
// Faster solution

let constructMaximumBinaryTree1 = function (nums) {
  return result(0, nums.length - 1);

  function result(left, right) {
    if (left > right) return null;
    let maxIndex = -1;
    let max = -Infinity;
    for (let i = left; i <= right; i++) {
      if (nums[i] > max) {
        maxIndex = i;
        max = nums[i];
      }
    }
    return {
      val: max,
      left: result(left, maxIndex - 1),
      right: result(maxIndex + 1, right),
    };
  }
};

console.log(constructMaximumBinaryTree1([3, 2, 1, 6, 0, 5]));
