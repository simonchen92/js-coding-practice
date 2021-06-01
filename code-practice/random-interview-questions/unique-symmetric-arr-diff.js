/*
Return the unique symmetric difference between the two arrays, not containing duplicated values from each array
*/

// Solution
const uniqueSymmetricDiff = (arr1, arr2) => [
  ...new Set([
    ...arr1.filter((num) => !arr2.includes(num)),
    ...arr2.filter((num) => !arr1.includes(num)),
  ]),
];

console.log(uniqueSymmetricDiff([1, 2, 3], [1, 2, 4])); // [3, 4]
console.log(uniqueSymmetricDiff([1, 2, 2], [1, 3, 1])); // [2, 3]
