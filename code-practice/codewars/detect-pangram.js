/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

Direct Link
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
*/

// Solution

function isPangram(string) {
  string = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet.every((letter) => string.indexOf(letter) !== -1);
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")); // false
console.log(isPangram("Cwm fjord bank glyphs vext quiz")); // true
console.log(
  isPangram(
    "A pangram is a sentence that contains every single letter of the alphabet at least once.",
  ),
); // false
