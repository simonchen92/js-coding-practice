/*
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
A subarray is a contiguous subsequence of the array.
Return the sum of all odd-length subarrays of arr.

Example 1:
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

Example 2:
Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

Example 3:
Input: arr = [10,11,12]
Output: 66

Constraints:
1 <= arr.length <= 100
1 <= arr[i] <= 1000

Direct Link
https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
*/

// Solution 1
let sumOddLengthSubarrays = function (arr) {
  let totalSum = 0;
  let len = arr.length;
  // create initial for loop to get starting point
  for (let i = 0; i < len; i++) {
    currentSum = 0;
    // create another for loop to get an ending point
    for (let j = i; j < len; j++) {
      currentSum += arr[j];

      // Count subarray that has odd length
      if ((j - i) % 2 === 0) {
        totalSum += currentSum;
      }
    }
  }
  return totalSum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58
console.log(sumOddLengthSubarrays([1, 2])); // 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // 66

// Solution 2
// Uses running sum to calculate subarrays
let sumOddLengthSubarrays1 = function (arr) {
  let currentSum = 0;
  let totalSum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    currentSum = arr[i];
    totalSum += currentSum;
    for (let j = i; j < len - 2; j += 2) {
      currentSum += arr[j + 1] + arr[j + 2];
      totalSum += currentSum;
    }
  }
  return totalSum;
};

console.log(sumOddLengthSubarrays1([1, 4, 2, 5, 3])); // 58
console.log(sumOddLengthSubarrays1([1, 2])); // 3
console.log(sumOddLengthSubarrays1([10, 11, 12])); // 66
