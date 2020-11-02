// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// Solution 1

const sortedArrayToBST = function (nums) {
  return sortedArrayToBSTHelper(0, nums.length)

  function sortedArrayToBSTHelper (start, end) {
    if (start >= end) return null

    const middle = start + Math.floor((end - start) / 2)
    // eslint-disable-next-line no-undef
    const currentNode = new TreeNode(nums[middle])

    const leftNode = sortedArrayToBSTHelper(start, middle)
    const rightNode = sortedArrayToBSTHelper(middle + 1, end)

    currentNode.left = leftNode
    currentNode.right = rightNode

    return currentNode
  }
}

module.exports = sortedArrayToBST
