/*
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

Examples:
spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"

Direct Link
https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
*/

// Solution

function spinWords(string) {
  let word = string.split(" ");
  let result = "";
  word.map((letter, i) => {
    if (letter.length >= 5) {
      word[i] = letter.split("").reverse().join("");
    } else {
      word[i] = letter;
    }
    result = word.join(" ");
  });
  return result;
}

console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("This is another test")); // "This is rehtona test"

// Clever Solution

function spinWords1(string) {
  return string
    .split(" ")
    .map((word) => {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

console.log(spinWords1("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords1("This is a test")); // "This is a test"
console.log(spinWords1("This is another test")); // "This is rehtona test"
