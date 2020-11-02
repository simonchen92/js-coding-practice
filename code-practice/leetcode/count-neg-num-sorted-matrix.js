/**
Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
Return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0

Example 3:
Input: grid = [[1,-1],[-1,-1]]
Output: 3

Example 4:
Input: grid = [[-1]]
Output: 1
 
Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100

Direct Link
https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 */

// Solution 1
// Brute force way
let countNegatives = function (grid) {
  let columnLength = grid[0].length;
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (grid[i][j] < 0) {
        count += columnLength - j;
        break;
      }
    }
  }
  return count;
};

// Solution 2
// Using reduce and filter

// let countNegatives = function (grid) {
//   return grid.reduce(
//     (acc, curr) => acc + curr.filter((num) => num < 0).length,
//     0,
//   );
// };

// Solution 3
// Using map and reduce

// let countNegatives = function (grid) {
//   return grid
//     .map((row) => row.filter((negativeNum) => negativeNum < 0).length)
//     .reduce((a, b) => a + b);
// };

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ]),
); // 8
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ]),
); // 0
console.log(
  countNegatives([
    [1, -1],
    [-1, -1],
  ]),
); // 3
console.log(countNegatives([[-1]])); // 1
