// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0

// Direct Link
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// Test Case
const test = [1, 2, 3, 4, 5] // 15
const test1 = [1, -2, 3, 4, 5] // 13
const test2 = [] // 0
const test3 = [-1, -2, -3, -4, -5] // 0
const test4 = [-1, 2, 3, 4, -5] // 9

// Solution 1 using for loop
function positiveSum (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i]
    }
  }
  return sum
}

console.log('--- Positive Sum Solution ---')
console.log(positiveSum(test))
console.log(positiveSum(test1))
console.log(positiveSum(test2))
console.log(positiveSum(test3))
console.log(positiveSum(test4))

// Solution 2 using filter and reduce
function positiveSum1 (arr) {
  return arr.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0)
}

console.log('--- Positive Sum 1 Solution is ---')
console.log(positiveSum1(test))
console.log(positiveSum1(test1))
console.log(positiveSum1(test2))
console.log(positiveSum1(test3))
console.log(positiveSum1(test4))
