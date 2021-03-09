/*
Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Direct Link
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
*/

// Solution
// using built in javascript functions

function reverseWords(str) {
  return str
    .split(' ')
    .map((char) => char.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); //  'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')); //  'elppa'
console.log(reverseWords('a b c d')); //  'a b c d'
console.log(reverseWords('double  spaced  words')); //  'elbuod  decaps  sdrow'

// Solution 2
// Using for loop

function reverseWords1(str) {
  let reversedWord = '';
  let reversedStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  }
  return reversedStr + reversedWord;
}

console.log(reverseWords1('The quick brown fox jumps over the lazy dog.')); //  'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords1('apple')); //  'elppa'
console.log(reverseWords1('a b c d')); //  'a b c d'
console.log(reverseWords1('double  spaced  words')); //  'elbuod  decaps  sdrow'
