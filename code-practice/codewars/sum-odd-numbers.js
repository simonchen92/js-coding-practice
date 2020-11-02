// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

// Direct Link
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/javascript

// Solution
function rowSumOddNumbers (n) {
  // Get the first digit of the row
  let firstDigit = (n * n) - (n - 1)
  let ans = 0
  let count = 0

  while (count < n) {
    // check if num is odd
    if (firstDigit % 2 !== 0) {
    // add to answer if its odd and increment count
      ans += firstDigit
      count++
    }
    // continue to add to num if its even
    firstDigit++
  }
  return ans
}

console.log(rowSumOddNumbers(2)) // 8
console.log(rowSumOddNumbers(5)) // 125
console.log(rowSumOddNumbers(42)) // 74088

// Solution 2
function rowSumOddNumbers1 (n) {
  return Math.pow(n, 3)
}

console.log(rowSumOddNumbers1(2)) // 8
console.log(rowSumOddNumbers1(5)) // 125
console.log(rowSumOddNumbers1(42)) // 74088
