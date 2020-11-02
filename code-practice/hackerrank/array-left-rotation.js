// A left rotation operation on an array shifts each of the array's elements  unit to the left.
// For example, if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array.
// Return the updated array to be printed as a single line of space-separated integers.

// Function Description
// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):
// An array of integers .
// An integer , the number of rotations.

// Input Format
// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform.
// The second line contains  space-separated integers .

// Output Format
// Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations.

// Direct Link to Challenge
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Test Cases

const arr = [1, 2, 3, 4, 5]
const arr1 = [21, 34, 56, 7, 89, 91, 63]

// Solution

function rotLeft (a, d) {
  const newArr = a.splice(0, d)
  return a.concat(newArr)
}

console.log(rotLeft(arr, 3))
console.log(rotLeft(arr1, 5))
