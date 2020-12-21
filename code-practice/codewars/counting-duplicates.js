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
// Using a for of and for in loop
function duplicateCount(text) {
  let count = 0;
  let input = text.toLowerCase();
  let obj = {};

  for (let i of input) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  for (let i in obj) {
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
