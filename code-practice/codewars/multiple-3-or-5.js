/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Direct Link
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
*/

// Solution

function solution(number) {
  // Create an arr from length of the value passed in
  let arr = Array.from({ length: number }, (v, i) => i);
  let numArr = [];
  arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      numArr.push(num);
    } else if (num % 3 === 0) {
      numArr.push(num);
    } else if (num % 5 === 0) {
      numArr.push(num);
    }
  });
  return numArr.reduce((acc, curr) => curr + acc, 0);
}

console.log(solution(10)); // 23
console.log(solution(20)); // 78
console.log(solution(200)); // 9168

// Clever Solution

function solution1(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution1(10)); // 23
console.log(solution1(20)); // 78
console.log(solution1(200)); // 9168
