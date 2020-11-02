/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

Direct Link
https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
*/

// Solution
function squareSum (numbers) {
  const squareNum = numbers.map(num => Math.pow(num, 2))
  const sum = squareNum.reduce((acc, curr) => acc + curr, 0)
  return sum
}

console.log(squareSum([1, 2])) // 5
console.log(squareSum([0, 3, 4, 5])) // 50
