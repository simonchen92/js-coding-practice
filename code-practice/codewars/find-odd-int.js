/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

Direct Link
https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript
*/

// Solution 1
function findOdd(A) {
  let count = 0;
  // using two for loops to loop through array
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      // if num match then increase count
      if (A[i] === A[j]) {
        count++;
      }
    }
    // if count is odd then return the number
    if (count % 2 !== 0) {
      return A[i];
    }
  }

  return count;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([10])); // 10
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1

// Solution 2
// Using built in functions

function findOdd1(A) {
  // First we find the num and the filter out the num we want and check to see how many times it appears
  // We then get the length of it and see if its odd
  return A.find((num, index) => A.filter((el) => el === num).length % 2 !== 0);
}

console.log(
  findOdd1([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
); // 5
console.log(findOdd1([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd1([10])); // 10
console.log(findOdd1([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd1([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd1([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
