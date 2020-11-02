/**
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

If there are no values in array a, please return empty array

Direct Link
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
 */

// Solution 1
function arrayDiff(a, b) {
  return a.filter((arr) => {
    return b.indexOf(arr) === -1;
  });
}

console.log(arrayDiff([], [4, 5])); // []
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([1, 8, 2], [])); // [1, 8, 2]

// Solution 2
function arrayDiff1(a, b) {
  let unique = [];

  if (a.length === 0) {
    return [];
  }

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      unique.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      unique.push(b[i]);
    }
  }

  return unique;
}

console.log(arrayDiff1([], [4, 5])); // []
console.log(arrayDiff1([3, 4], [3])); // [4]
console.log(arrayDiff1([1, 8, 2], [])); // [1, 8, 2]
