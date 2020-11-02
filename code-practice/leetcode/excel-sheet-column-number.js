// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...

// Example 1:
// Input: "A"
// Output: 1

// Example 2:
// Input: "AB"
// Output: 28

// Example 3:
// Input: "ZY"
// Output: 701

// Direct Link to Leetcode Problem
// https://leetcode.com/problems/excel-sheet-column-number/

// Solution 1

const titleToNumber = function (s) {
  let results = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    results = results * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1)
  }
  return results
}

console.log(titleToNumber('AB')) // => 28
console.log(titleToNumber('ZY')) // => 701

// Solution 2
// Faster solution

const titleToNumber1 = function (s) {
  const len = s.length
  let num = 0
  const charCodeBase = 'A'.charCodeAt(0) - 1

  for (let i = 0; i < len; i++) {
    num += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, len - i - 1)
  }

  return num
}

console.log(titleToNumber1('AB'))
console.log(titleToNumber1('ZY'))
