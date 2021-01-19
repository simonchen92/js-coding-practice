/*
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

Direct Link
https://www.codewars.com/kata/5656b6906de340bd1b0000ac
*/

// Solution
// Using set to get distinct characters
function longest(s1, s2) {
  const str = new Set([...s1, ...s2]);
  return [...str].sort().join('');
}

// Alternate Solution
// One liner
// function longest(s1, s2) {
//   return [...new Set(s1 + s2)].sort().join('');
// }

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')); // "abcdefklmopqwxy"
console.log(
  longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'),
); // "abcdefghijklmnopqrstuvwxyz"
