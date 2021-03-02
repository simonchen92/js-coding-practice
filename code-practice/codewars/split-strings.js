/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

Direct Link
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
*/

// Solution

function solution(str) {
  let strPairs = [];
  for (let i = 0; i < str.length; i += 2) {
    if (i === str.length - 1) {
      strPairs.push(str.slice(i) + '_');
    } else {
      strPairs.push(str.slice(i, i + 2));
    }
  }
  return strPairs;
}

console.log(solution('abcdef')); // ["ab", "cd", "ef"]
console.log(solution('abcdefg')); // ["ab", "cd", "ef", "g_"]
console.log(solution('')); // []
