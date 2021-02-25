/*
Write a function solution that given an integer n returns the maximum possible value obtained by inserting one '5' digit 
inside the decimal representation of integer n

Examples:
1. Given N = 268, the function should return 5268
2. Given N = 670, the function should return 6750
3. Given N = 0, the function should return 50
4. Given N = -999, the function should return -5999

Assume that:
N is an integer within the range [-8,000..8,000]
*/

// Solution
function solution(N) {
  let numStr = ('' + N).split('');
  // if values are larger than 0
  if (N >= 0) {
    for (let i = 0; i < numStr.length; i++) {
      let number = parseInt(numStr[i]);
      if (5 > number) {
        numStr.splice(i, 0, 5);
        return numStr.join('');
      }
    }
  }

  // if values are negative
  if (N < 0) {
    for (let i = 0; i < numStr.length; i++) {
      let number = parseInt(numStr[i]);
      if (number > 5) {
        numStr.splice(i, 0, 5);
        return numStr.join('');
      }
    }
  }

  return numStr;
}

console.log(solution(268)); // 5268
console.log(solution(670)); // 6750
console.log(solution(0)); // 50
console.log(solution(-999)); // -5999
