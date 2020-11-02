/*

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

For example:
When an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455

Direct Link
https://www.codewars.com/kata/558fc85d8fd1938afb000014/javascript
*/

// Solution
// Sort the numbers from descending order from smallest num to largest and then add the first two indexes from the array
function sumTwoSmallestNumbers (numbers) {
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) // 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) // 10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])) // 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])) // 16
