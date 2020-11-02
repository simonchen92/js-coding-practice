/* An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, A, of
size N, each memory of location has some unique index, i(where 0 <= i < N), that can be referenced as A[i] (you may also see it written as Ai).

Given an array, A, of N integers, print each element in reverse order as a single line of space - separated integers.

Input Format
- The first line contains an integer, N(the number of integers in A).
- The second line contains N space-separated integers describing A.

Output Format
- Print all N integers in A in reverse order as a single line of space-separated integers.

Direct Link to Hacker Rank Challenge
https://www.hackerrank.com/challenges/arrays-ds/problem?h_r=profile

Test Case
1, 2, 3, 4 => 4, 3, 2, 1
1, 4, 3, 2 => 2, 3, 4, 1
*/

// Solution

function reverseArray (a) {
  const newArr = []
  // Starting from the end
  const arrLength = a.length - 1
  // Iterate through the loop from the last index of an array and continue as long as i > 0
  for (let i = arrLength; i >= 0; i--) {
    newArr.push(a[i])
  }
  return newArr
}

console.log(reverseArray([1, 2, 3, 4]))
console.log(reverseArray([1, 4, 2, 3]))
console.log(reverseArray([1, 3, 5, 2, 4, 6, 7]))
