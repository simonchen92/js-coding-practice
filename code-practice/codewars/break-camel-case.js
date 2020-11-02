/** 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"

Direct Link
https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
*/

// Soluton
function solution(string) {
  let arr = string.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = ' ' + arr[i];
    }
  }
  return arr.join('');
}

console.log(solution('camelCasing'));
console.log(solution('thePizzaManCan'));
console.log(solution('bestPersonInTheWorld'));

// Solution 2
function solution1(string) {
  return string
    .split('')
    .map((word) => (word === word.toUpperCase() ? ' ' + word : word))
    .join('');
}

console.log(solution1('camelCasing'));
console.log(solution1('thePizzaManCan'));
console.log(solution1('bestPersonInTheWorld'));
