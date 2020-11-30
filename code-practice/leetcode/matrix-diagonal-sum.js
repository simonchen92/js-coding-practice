/* 
Given a square matrix mat, return the sum of the matrix diagonals.
Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

 

Example 1:
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Example 2:
Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

Example 3:
Input: mat = [[5]]
Output: 5

Constraints:
n == mat.length == mat[i].length
1 <= n <= 100
1 <= mat[i][j] <= 100

Direct Link
https://leetcode.com/problems/matrix-diagonal-sum/
*/

// Solution

let diagonalSum = function (mat) {
  // Create a total sum
  let sum = 0;

  // Create a for loop to iterate over array
  // Creates the primary diagonal listed in the problem (top left diagonal to bottom right)
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];

    // Create conditional to check if value is already taken and create the secondary diagonal (top right diagonal to bottom left)
    if (i !== mat[i].length - i - 1) {
      // Take the arr value of the secondary diagonal and assign it to sum
      sum += mat[i][mat[i].length - i - 1];
    }
  }
  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); // 25
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]),
); // 8
console.log(diagonalSum([[5]])); // 5
