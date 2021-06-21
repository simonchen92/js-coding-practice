/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

Direct Link
https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
*/

// Solution

const maxSequence = function (arr) {
  let currSum = 0;
  let maxSum = 0;

  // if arr is empty then return 0
  if (arr.length === 0) {
    return 0;
  }

  // Using Kadane's algorithm
  arr.forEach((num) => {
    // We set our currentSum equal to the highest value of the num and the sum of currSum + num
    currSum = Math.max(num, currSum + num);
    // Set maxSum equal to the highest value between maxSum itself and currentSum
    maxSum = Math.max(maxSum, currSum);
  });
  return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([])); // 0
