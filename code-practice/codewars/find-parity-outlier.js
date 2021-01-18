/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

Direct Link
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript
*/

// Solution 1
// Using for loops and helper functions

// Helper function to find even num
const findEvenNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
};

// Helper function to find odd num
const findOddNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
};

function findOutlier(integers) {
  let evenCount = 0;
  let oddCount = 0;

  // For loop using length + 1 for arrays that have only 3 elements
  for (let i = 0; i < integers.length + 1; i++) {
    // Find even nums and add to even count
    if (integers[i] % 2 === 0) {
      evenCount++;
    }

    // Find odd nums and add to odd count
    if (integers[i] % 2 !== 0) {
      oddCount++;
    }

    if (evenCount > 1) {
      return findOddNum(integers);
    }

    if (oddCount > 1) {
      return findEvenNum(integers);
    }
  }
}

// console.log(findOutlier([0, 1, 2])); //  1
// console.log(findOutlier([1, 2, 3])); // 2
// console.log(findOutlier([2, 6, 8, 10, 3])); // 3
// console.log(findOutlier([0, 0, 3, 0, 0])); // 3
// console.log(findOutlier([1, 1, 0, 1, 1])); // 0

// Solution 2
// Using filter

function findOutlier1(integers) {
  const evenArr = integers.filter((num) => num % 2 === 0);
  const oddarr = integers.filter((num) => num % 2 !== 0);

  // We pick even arr to look at here for logic
  // If even arr length is 1 we take that value, if not we take the num in oddArr
  if (evenArr.length === 1) {
    return evenArr[0];
  } else {
    return oddArr[0];
  }
}

console.log(findOutlier1([0, 1, 2])); //  1
console.log(findOutlier1([1, 2, 3])); // 2
console.log(findOutlier1([2, 6, 8, 10, 3])); // 3
console.log(findOutlier1([0, 0, 3, 0, 0])); // 3
console.log(findOutlier1([1, 1, 0, 1, 1])); // 0
