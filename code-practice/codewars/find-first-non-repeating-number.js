/*
Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, 
so that's the first non-consecutive number.
If the whole array is consecutive then return null.
The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. 
The numbers could be positive or negative and the first non-consecutive could be either too!

Direct Link
https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
*/

// Solution
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8])); // null
console.log(firstNonConsecutive([-3, -2, 0, 1, 2])); // 0
console.log(firstNonConsecutive([-3, -1, 0, 1, 2])); // -1

// Smart Solution
function firstNonConsecutive1(arr) {
  let result = arr.find((value, index) => value !== index + arr[0]);
  return Number.isInteger(result) ? result : null;
}

console.log(firstNonConsecutive1([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive1([1, 2, 3, 4, 5, 6, 7, 8])); // null
console.log(firstNonConsecutive1([-3, -2, 0, 1, 2])); // 0
console.log(firstNonConsecutive1([-3, -1, 0, 1, 2])); // -1
