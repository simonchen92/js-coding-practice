/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 
Bob observed that one number usually differs from the others in evenness. 
Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

Direct Link
https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
*/

// Solution
// Brute Forcde

function iqTest(numbers) {
  // Split the string of numbers into individual digits
  let strDigit = numbers.split(" ");
  let digit = strDigit.map((num) => parseInt(num));
  let evenDigit = [];
  let oddDigit = [];
  // Check if most of the numbers are either EVEN or ODD
  for (let i = 0; i < digit.length; i++) {
    let currNum = digit[i];
    if (currNum % 2 === 0) {
      evenDigit.push(currNum);
    } else {
      oddDigit.push(currNum);
    }
  }

  // First check to see which arr has the single odd one out length
  // Return the index of the digit that differs in "evenness"
  if (evenDigit.length === 1) {
    let evenIndex = evenDigit.map((num) => digit.indexOf(num));
    return evenIndex[0] + 1;
  } else {
    let oddIndex = oddDigit.map((num) => digit.indexOf(num));
    return oddIndex[0] + 1;
  }
}

console.log(iqTest("2 4 7 8 10")); // => 3 // Third number is odd, while the rest of the numbers are even
console.log(iqTest("1 2 1 1")); // => 2 // Second number is even, while the rest of the numbers are odd

// Solution 2
// Using filter and indexOf

function iqTest2(numbers) {
  numbers = numbers.split(" ").map(function(num) {
    return parseInt(num);
  });

  const odd = numbers.filter(function(digit) {
    return digit % 2 === 1;
  });
  const even = numbers.filter(function(digit) {
    return digit % 2 === 0;
  });

  return odd.length < even.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1;
}


console.log(iqTest2("2 4 7 8 10")); // => 3 
console.log(iqTest2("1 2 1 1")); // => 2