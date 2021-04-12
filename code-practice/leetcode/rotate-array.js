// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]

// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]

// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Solution 1

const rotate = function (nums, k) {
  let x = 0;
  while (x < k) {
    // Pop removes last elements in arr
    // We then take the remove elements and add it to the front of arr using unshift
    const c = nums.pop();
    nums.unshift(c);
    x++;
  }
  return nums;
};

// Alternate Solution
// const rotate = function (nums, k) {
//   let x = 0;
//   while (x < k) {
//     nums.unshift(nums.pop());
//     x++;
//   }
//   return nums;
// };

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3, 99, -1, 100]

// Solution 2 using splice and spread operator

const rotateTwo = function (nums, k) {
  const newArr = nums.splice(nums.length - k);
  nums.unshift(...newArr);
  return [...nums];
};

// Alternate Solution

// const rotateTwo = (nums, k) => {
//   nums.unshift(...nums.splice(nums.length - k));
//   return nums;
// };

console.log(rotateTwo([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
console.log(rotateTwo([-1, -100, 3, 99], 2)); // [3, 99, -1, 100]
