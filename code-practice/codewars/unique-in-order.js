/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements 
with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Direct Link
https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
*/

// Solution

let uniqueInOrder = function (iterable) {
  // create an empty array to store unique elements
  let unique = [];

  // create for loop to loop through and check for if next elements are the same
  for (let i = 0; i < iterable.length; i++) {
    let curr = iterable[i];
    let next = iterable[i + 1];
    // check if the next element is the same, if not then we push to unique array
    if (curr !== next) {
      unique.push(curr);
    }
  }
  return unique;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]
