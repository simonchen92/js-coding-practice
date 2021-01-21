/*
Write a function called repeat_str which repeats the given string src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

Direct Link
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
*/

// Solution

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, '*')); // "***"
console.log(repeatStr(5, '#')); // "#####"
console.log(repeatStr(2, 'ha ')); // "ha ha ")
