// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
// Example 4:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

// Constraints:
// 1 <= s.length <= 1000
// s[i] = 'L' or 'R'

// Direct Link to Leetcode Challenge
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// Test Case
const s = 'RLRRLLRLRL'
const s1 = 'RLLLLRRRLR'
const s2 = 'LLLLRRRR'
const s3 = 'RLRRRLLRLL'

// Solution
const balancedStringSplit = function (s) {
  let count = 0
  let word = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      word++
    } else {
      word--
    }
    if (word === 0) {
      count++
    }
  }
  return count
}

console.log(balancedStringSplit(s))
console.log(balancedStringSplit(s1))
console.log(balancedStringSplit(s2))
console.log(balancedStringSplit(s3))
