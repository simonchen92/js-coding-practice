/*
There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
You have to form a team of 3 soldiers amongst them under the following rules:
Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).


Example 1:
Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 

Example 2:
Input: rating = [2,1,3]
Output: 0
Explanation: We can't form any team given the conditions.

Example 3:
Input: rating = [1,2,3,4]
Output: 4

Constraints:
n == rating.length
1 <= n <= 200
1 <= rating[i] <= 10^5

Direct Link
https://leetcode.com/problems/count-number-of-teams/
*/

// Solution
// Using three pointers
var numTeams = function (rating) {
  let result = 0;
  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      for (let k = j + 1; k < rating.length; k++) {
        if (
          (rating[i] < rating[j] && rating[j] < rating[k]) ||
          (rating[i] > rating[j] && rating[j] > rating[k])
        ) {
          result++;
        }
      }
    }
  }
  return result;
};

console.log(numTeams([2, 5, 3, 4, 1])); // 3
console.log(numTeams([2, 1, 3])); // 0
console.log(numTeams([1, 2, 3, 4])); // 4

// Solution 2

let numTeams1 = function (rating) {
  let results = 0;

  // Create a greater than array that fulfills condition (rating[i] > rating[j] > rating[k])
  let greaterThan = new Array(rating.length).fill(0);
  // Create a less than array that fulfills condition (rating[i] < rating[j] < rating[k])
  let lessThan = new Array(rating.length).fill(0);

  if (rating.length < 3) return 0;

  // Using nested for loop to determine if values are greater or less than according to the conditions below
  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      // number of integers after rating[i] (this is rating[j]) that are greater than rating[i]
      // else number of integers after rating[i] (this is rating[j]) that are less than rating[i]
      if (rating[j] > rating[i]) {
        ++greaterThan[i];
      } else if (rating[j] < rating[i]) {
        ++lessThan[i];
      }
    }
  }

  // Using another nested for loop to determine the group of numbers up to the third last number in array
  for (let i = 0; i < rating.length - 2; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      // if num of j is greater than num of i then add to our result arr
      if (rating[j] > rating[i]) {
        results += greaterThan[j];
        // if num of j is less than rating i then add to our result arr
      } else if (rating[j] < rating[i]) {
        results += lessThan[j];
      }
    }
  }

  return results;
};

console.log(numTeams1([2, 5, 3, 4, 1])); // 3
console.log(numTeams1([2, 1, 3])); // 0
console.log(numTeams1([1, 2, 3, 4])); // 4
