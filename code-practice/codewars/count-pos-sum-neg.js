// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

// Direct Link
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// Solution

function countPositivesSumNegatives (input) {
  if (input === null || input.length === 0) {
    return []
  }
  let pos = 0
  let neg = 0
  input.forEach(x => { x > 0 ? pos++ : neg += x })
  return [pos, neg]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // [8, -50]
