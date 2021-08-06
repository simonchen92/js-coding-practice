/*
Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e' 
['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)

Direct Link
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
*/

// Solution
function findMissingLetter(array) {
  // manually added alphabets
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let firstLetter = array[0];

  if (firstLetter === firstLetter.toUpperCase()) {
    alphabet = alphabet.join("").toUpperCase().split("");
  }

  // get first array element
  let firstArrayElement = alphabet.indexOf(firstLetter);

  // get the range of element in our array
  alphabet = alphabet.splice(firstArrayElement, array.length + 1);

  // loop through alphabet and if the array doesn't have that alphabet we will return it
  for (let i = 0; i < alphabet.length + 1; i++) {
    if (array.indexOf(alphabet[i]) === -1) {
      return alphabet[i];
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // 'e'
console.log(findMissingLetter(["O", "Q", "R", "S"])); // 'P'

// Solution 2

function findMissingLetter1(array) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letter = alphabet.split("");
  let start = letter.indexOf(array[0]);
  return letter
    .slice(start, start + array.length)
    .find((char) => !array.includes(char));
}

console.log(findMissingLetter1(["a", "b", "c", "d", "f"])); // 'e'
console.log(findMissingLetter1(["O", "Q", "R", "S"])); // 'P'

// Clever Solution

function findMissingLetter2(array) {
  let first = array[0].charCodeAt(0);
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
}

console.log(findMissingLetter2(["a", "b", "c", "d", "f"])); // 'e'
console.log(findMissingLetter2(["O", "Q", "R", "S"])); // 'P'
