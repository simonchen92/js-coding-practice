/*
Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:
[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]

Direct Link
https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
*/

// Solution
// Using reduce method

function sumOfMinimums(arr) {
  // reduce method takes previousValue (acc) + the minimum currentValue
  return arr.reduce((acc, curr) => acc + Math.min(...curr), 0);
}

console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5], // minimum value of row is 1
    [5, 6, 7, 8, 9], // minimum value of row is 5
    [20, 21, 34, 56, 100], // minimum value of row is 20
  ]),
); // 26
console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ]),
); // 9
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ]),
); // 76

// Solution 2
// Using for loop instead of reduce

function sumOfMinimums2(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += Math.min(...arr[i]);
  }

  return total;
}

console.log(
  sumOfMinimums2([
    [1, 2, 3, 4, 5], // minimum value of row is 1
    [5, 6, 7, 8, 9], // minimum value of row is 5
    [20, 21, 34, 56, 100], // minimum value of row is 20
  ]),
); // 26
console.log(
  sumOfMinimums2([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ]),
); // 9
console.log(
  sumOfMinimums2([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ]),
); // 76

// Solution 3
// Using two for loop to loop through array to check for the next biggest value

function sumOfMinimums3(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (num > arr[i][j]) {
        num = arr[i][j];
      }
    }
    sum += num;
  }
  return sum;
}

console.log(
  sumOfMinimums3([
    [1, 2, 3, 4, 5], // minimum value of row is 1
    [5, 6, 7, 8, 9], // minimum value of row is 5
    [20, 21, 34, 56, 100], // minimum value of row is 20
  ]),
); // 26
console.log(
  sumOfMinimums3([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ]),
); // 9
console.log(
  sumOfMinimums3([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ]),
); // 76
