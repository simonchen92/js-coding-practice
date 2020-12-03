/*
Given the array queries of positive integers between 1 and m, 
you have to process all queries[i] (from i=0 to i=queries.length-1) according to the following rules:

In the beginning, you have the permutation P=[1,2,3,...,m].
For the current i, find the position of queries[i] in the permutation P (indexing from 0) and then move this at the beginning of the permutation P. 
Notice that the position of queries[i] in P is the result for queries[i].
Return an array containing the result for the given queries.

Example 1:
Input: queries = [3,1,2,1], m = 5
Output: [2,1,2,1] 
Explanation: The queries are processed as follow: 
For i=0: queries[i]=3, P=[1,2,3,4,5], position of 3 in P is 2, then we move 3 to the beginning of P resulting in P=[3,1,2,4,5]. 
For i=1: queries[i]=1, P=[3,1,2,4,5], position of 1 in P is 1, then we move 1 to the beginning of P resulting in P=[1,3,2,4,5]. 
For i=2: queries[i]=2, P=[1,3,2,4,5], position of 2 in P is 2, then we move 2 to the beginning of P resulting in P=[2,1,3,4,5]. 
For i=3: queries[i]=1, P=[2,1,3,4,5], position of 1 in P is 1, then we move 1 to the beginning of P resulting in P=[1,2,3,4,5]. 
Therefore, the array containing the result is [2,1,2,1].  

Example 2:
Input: queries = [4,1,2,2], m = 4
Output: [3,1,2,0]

Example 3:
Input: queries = [7,5,5,8,3], m = 8
Output: [6,5,0,7,5]
 
Constraints:
1 <= m <= 10^3
1 <= queries.length <= m
1 <= queries[i] <= m

Direct Link
https://leetcode.com/problems/queries-on-a-permutation-with-key/
*/

// Solution 1
// Using Splice and Unshift

let processQueries = function (queries, m) {
  // Create a 'p' num array [1,2,3,...,m]
  let p = [];
  for (let i = 1; i <= m; i++) {
    p.push(i);
  }

  // Create a result array
  let result = [];

  // Create a for loop to iterate over numbers in queries
  for (let i = 0; i < queries.length; i++) {
    // find index of queries[i] and shift to i index of permuation
    let index = p.indexOf(queries[i]);

    // Remove element we just found
    p.splice(index, 1);
    // Add element back to the beginning of the array
    p.unshift(queries[i]);
    // Push into results arr
    result.push(index);
  }
  return result;
};

// console.log(processQueries([3, 1, 2, 1], 5)); // [2,1,2,1]
// console.log(processQueries([4, 1, 2, 2], 4)); // [3,1,2,0]
// console.log(processQueries([7, 5, 5, 8, 3], 8)); // [6,5,0,7,5]

// Solution 2
// Not using splice and unshift => create better time and space complexity

let processQueries1 = function (queries, m) {
  // Create a 'p' num array [1,2,3,...,m]
  let p = [];
  for (let i = 1; i <= m; i++) {
    p.push(i);
  }

  // Create a result array
  let result = [];

  // Create a for loop to iterate over numbers in queries
  for (let i = 0; i < queries.length; i++) {
    // find index of queries[i] and shift to i index of permuation
    let index = p.indexOf(queries[i]);
    result.push(index);

    // Not using splice for our problem
    while (index > 0) {
      let ans = p[index];
      p[index] = p[index - 1];
      p[index - 1] = ans;
      index--;
    }
  }
  return result;
};

console.log(processQueries1([3, 1, 2, 1], 5)); // [2,1,2,1]
console.log(processQueries1([4, 1, 2, 2], 4)); // [3,1,2,0]
console.log(processQueries1([7, 5, 5, 8, 3], 8)); // [6,5,0,7,5]
