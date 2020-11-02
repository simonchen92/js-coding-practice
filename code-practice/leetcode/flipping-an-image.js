/**
Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

Example 1:
Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

Example 2:
Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

Notes:
1 <= A.length = A[0].length <= 20
0 <= A[i][j] <= 1

Direct Link
https://leetcode.com/problems/flipping-an-image/
*/

// Solution 1
let flipAndInvertImage = function (A) {
  // Create a reversed array
  let reversedArr = A.map((current) => {
    return current.reverse();
  });

  // traverse through array to get values and flip their values
  for (let i = 0; i < reversedArr.length; i++) {
    for (let j = 0; j < reversedArr[i].length; j++) {
      if (reversedArr[i][j] === 1) {
        reversedArr[i][j] = 0;
      } else {
        reversedArr[i][j] = 1;
      }
    }
  }
  return reversedArr;
};

console.log(flipAndInvertImage([1, 1, 0], [1, 0, 1], [0, 0, 0])); // [1,0,0],[0,1,0],[1,1,1]

// Solution 2
let flipAndInvertImage1 = function (A) {
  for (let row in A) {
    // reverse row using built in javascript function
    A[row] = A[row].reverse();
    // map the row with values and subtract 1 from num to get values opposite of init values
    A[row] = A[row].map((num) => 1 - num);
  }
  return A;
};
