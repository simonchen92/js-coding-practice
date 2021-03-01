/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

Direct Link
https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
*/

// Solution

function alphabetPosition(text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let splitText = text.split('');
  for (let i = 0; i < text.length; i++) {
    // 1 based arrays results so we add 1 at the end
    splitText[i] = alphabet.indexOf(splitText[i].toLowerCase()) + 1;
  }
  return splitText
    .filter((word) => {
      if (word > 0) return word;
    })
    .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition('The narwhal bacons at midnight.')); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

// Best Solution using charCodeAt
// function alphabetPosition(text) {
//   var result = '';
//   for (var i = 0; i < text.length; i++) {
//     var code = text.toUpperCase().charCodeAt(i);
//     if (code > 64 && code < 91) result += code - 64 + ' ';
//   }

//   return result.slice(0, result.length - 1);
// }
