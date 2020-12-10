/*
Given two binary search trees root1 and root2.
Return a list containing all the integers from both trees sorted in ascending order.

Example 1:
Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]

Example 2:
Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
Output: [-10,0,0,1,2,5,7,10]

Example 3:
Input: root1 = [], root2 = [5,1,7,0,2]
Output: [0,1,2,5,7]

Example 4:
Input: root1 = [0,-10,10], root2 = []
Output: [-10,0,10]

Example 5:
Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
 

Constraints:
Each tree has at most 5000 nodes.
Each node's value is between [-10^5, 10^5].

Direct Link
https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
*/

// Class definition for binary tree
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Solution
let getAllElements = function (root1, root2) {
  const list = [];
  const getAllNodes = (root) => {
    if (!root) return;
    list.push(root.val);
    getAllNodes(root.left);
    getAllNodes(root.right);
  };
  getAllNodes(root1);
  getAllNodes(root2);

  return list.sort((a, b) => a - b);
};

console.log(getAllElements([2, 1, 4], [1, 0, 3])); // [0,1,1,2,3,4]
