/*
Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.
Return the minimum size of the set so that at least half of the integers of the array are removed.

Example 1:
Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.

Example 2:
Input: arr = [7,7,7,7,7,7]
Output: 1
Explanation: The only possible set you can choose is {7}. This will make the new array empty.

Example 3:
Input: arr = [1,9]
Output: 1

Example 4:
Input: arr = [1000,1000,3,7]
Output: 1

Example 5:
Input: arr = [1,2,3,4,5,6,7,8,9,10]
Output: 5


Constraints:
1 <= arr.length <= 10^5
arr.length is even.
1 <= arr[i] <= 10^5

Direct Link
https://leetcode.com/problems/reduce-array-size-to-the-half/
*/

// Solution

const minSetSize = function (arr) {
  // Create map object
  const map = new Map();

  // Count number of occurence and save in map obj
  for (let num of arr) {
    if (!map.has(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);
  }

  let countPairs = [...map].sort((a, b) => b[1] - a[1]);

  let targetArrSize = arr.length / 2;

  // Create variables to keep count and sum
  let index = 0;
  let counts = 0;
  let sum = 0;

  // As long as sum is less than target arr size, we will keep count
  while (sum < targetArrSize) {
    sum += countPairs[index++][1];
    counts++;
  }
  return counts;
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])); // 2
console.log(minSetSize([7, 7, 7, 7, 7, 7])); // 1
console.log(minSetSize([1000, 1000, 3, 7])); // 1
console.log(minSetSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5

// Solution 2

const minSetSize1 = function (arr) {
  let targetArrSize = arr.length / 2;
  if (targetArrSize === 1) return 1;
  let count = {};
  // Loop through arr to count number of occurence of each number
  for (let num of arr) {
    if (count[num] === undefined) count[num] = 1;
    else if (++count[num] >= targetArrSize) return 1;
  }
  // Getting the values of the number of occurence that will be listed in ascending order
  let combined = Object.values(count).sort((a, b) => a - b);
  let i = combined.length;
  // As long as the targetArrSize is greater than 0 we will add our accepted size from right to left
  while (targetArrSize > 0) targetArrSize -= combined[--i];
  // Return value
  return combined.length - i;
};

console.log(minSetSize1([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])); // 2
console.log(minSetSize1([7, 7, 7, 7, 7, 7])); // 1
console.log(minSetSize1([1000, 1000, 3, 7])); // 1
console.log(minSetSize1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5
