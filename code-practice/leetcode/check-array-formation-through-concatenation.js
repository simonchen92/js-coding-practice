/**
You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. 
Your goal is to form arr by concatenating the arrays in pieces in any order. 
However, you are not allowed to reorder the integers in each array pieces[i].
Return true if it is possible to form the array arr from pieces. Otherwise, return false.


Example 1:
Input: arr = [85], pieces = [[85]]
Output: true

Example 2:
Input: arr = [15,88], pieces = [[88],[15]]
Output: true
Explanation: Concatenate [15] then [88]

Example 3:
Input: arr = [49,18,16], pieces = [[16,18,49]]
Output: false
Explanation: Even though the numbers match, we cannot reorder pieces[0].

Example 4:
Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
Output: true
Explanation: Concatenate [91] then [4,64] then [78]

Example 5:
Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
Output: false


Constraints:
1 <= pieces.length <= arr.length <= 100
sum(pieces[i].length) == arr.length
1 <= pieces[i].length <= arr.length
1 <= arr[i], pieces[i][j] <= 100
The integers in arr are distinct.
The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).

Direct Link
https://leetcode.com/problems/check-array-formation-through-concatenation/
 */

// Solution
// Using string concatenation
let canFormArray = function (arr, pieces) {
  arr = arr.join('');
  // Keep check on total length
  let total = '';

  for (let i = 0; i < pieces.length; i++) {
    pieces[i] = pieces[i].join('');
    total += pieces[i];

    // Check to see if arr values are present in pieces array
    // If not present, then return false
    if (arr.indexOf(pieces[i]) === -1) return false;
  }

  // Return false if the array length is larger than total combined length of the pieces
  if (total.length < arr.length) return false;
  return true;
};

console.log(canFormArray([85], [[85]])); // true
console.log(canFormArray([15, 88], [[15, 88]])); // true
console.log(canFormArray([49, 18, 16], [[16, 18, 49]])); // false piece[0] or 16 cannot be mutated
console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])); // true
console.log(canFormArray([1, 3, 5, 7], [[2, 4, 6, 8]])); // false
