/**
Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

Direct Link
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/javascript
 */

// Solution

function highestRank(arr) {
  let obj = {};
  arr.map((num) => (obj[num] = obj[num] ? obj[num] + 1 : 1));
  let result = 0;
  let result1 = 0;
  for (let num in obj) {
    // Creates a string of number if it isn't already
    num = num * 1;
    if (obj[num] >= result) {
      result = obj[num];
      result1 = num;
    }
  }
  return result1;
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3
