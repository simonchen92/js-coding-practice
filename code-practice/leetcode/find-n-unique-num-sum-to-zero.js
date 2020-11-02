/**
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:
Input: n = 3
Output: [-1,0,1]

Example 3:
Input: n = 1
Output: [0]

Constraints:
1 <= n <= 1000

Direct Link
https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 */

// Solution
// There is a pattern where if you take the pos and neg num of the digit then its always zero

let sumZero = function (n) {
  let result = [];
  let roundedNum = Math.floor(n / 2);

  // check for even numbers
  for (let i = 0; i < roundedNum; i++) {
    result.push(n - i, -n + i);
  }

  // if odd num return 0
  if (n % 2 !== 0) {
    result.push(0);
  }

  return result;
};

console.log(sumZero(5));
console.log(sumZero(4));
console.log(sumZero(3));
console.log(sumZero(2));
console.log(sumZero(1));
