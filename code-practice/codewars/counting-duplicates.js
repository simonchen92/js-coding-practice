/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

Direct Link
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript
*/

// Solution 1

function duplicateCount(text) {
  // create an obj to store counts of letters
  let obj = {};
  // create a counter to keep track of times each text occurs
  let count = 0;
  // de-structure text variable and also make it case-insensitive
  let input = text.toLowerCase();

  // create a for of loop to loop through each individual letter
  for (let i of input) {
    // assign i to obj to keep track of count if it hasn't appeared yet
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  // create for in loop to loop through obj key value pairs
  for (let i in obj) {
    // create conditional that if there is an obj count greater than 1 then add count by 1
    if (obj[i] > 1) {
      count++;
    }
  }

  return count;
}

console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
console.log(duplicateCount('aA11')); // 2
console.log(duplicateCount('ABBA')); // 2
