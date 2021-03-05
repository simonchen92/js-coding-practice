/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. 
This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.

Direct Link
https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript
*/

// Solution

function permutations(string) {
  // if string is less than 2 characters long then return it
  if (!!string.length && string.length < 2) {
    return [string];
  }

  let permutationArr = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    // checks to make sure that the char string is not the same during the iteration to get rid of dupes
    // continue on in the loop if it isnt a dupe
    if (string.indexOf(char) !== i) {
      continue;
    }
    // gets all the remaining characters of the word we are not iterating over
    let remainder = string.slice(0, i) + string.slice(i + 1, string.length);
    // using recursion here to loop over the remaining values which we will pass in the remaining characters
    for (let permutation of permutations(remainder)) {
      permutationArr.push(char + permutation);
    }
  }
  return permutationArr;
}

console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // [('ab', 'ba')]
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
