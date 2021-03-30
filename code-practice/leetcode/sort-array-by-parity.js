/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
You may return any answer array that satisfies this condition.

Example 1:
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:
1 <= A.length <= 5000
0 <= A[i] <= 5000

Direct Link
https://leetcode.com/problems/sort-array-by-parity/
*/

// Solution
// Using for Each

var sortArrayByParity = function (A) {
  let arr = [];
  A.forEach((num) => (num % 2 === 0 ? arr.unshift(num) : arr.push(num)));
  return arr;
};

console.log(sortArrayByParity([3, 1, 2, 4]));

// Solution 2
// Using filter

var sortArrayByParity1 = function (A) {
  return [
    ...A.filter((num) => num % 2 === 0),
    ...A.filter((num) => num % 2 !== 0),
  ];
};

console.log(sortArrayByParity1([3, 1, 2, 4]));
