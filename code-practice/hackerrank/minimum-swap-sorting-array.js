// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
// You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

// For example, given the array arr = [4,3,1,2] we perform the following steps:
// After swapping (0, 2) we get arr = [1,3,4,2]
// After swapping (1, 2) we get arr = [1,4,3,2]
// After swapping (1, 3) we get arr = [1,2,3,4]
// So, we need a minimum of 3 swaps to sort the array in ascending order

// Function Description
// Complete the function minimumSwaps in the editor below.
// It must return an integer representing the minimum number of swaps to sort the array.

// minimumSwaps has the following parameter(s):
// arr: an unordered array of integers

// Input Format -
// The first line contains an integer, n, the size of arr.
// The second line contains n space-separated integers arr[i].

// Constraints -
// 1 <= n <= 10^5
// 1 <= arr[i] <= n

// Output Format
// Return the minimum number of swaps to sort the given array.

// Direct Link to HackerRank
// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays

// Test Cases
const arr = [4, 3, 1, 2] // => 3
const arr1 = [2, 3, 4, 1, 5] // => 3
const arr2 = [1, 3, 5, 2, 4, 6, 7] // => 3
const arr3 = [7, 1, 3, 2, 4, 5, 6] // => 5

// Solution

function minimumSwaps (arr) {
  let minSwaps = 0
  arr.map((item, index) => {
    if (item !== index + 1) {
      const rightIndex = arr.indexOf(index + 1, index);
      [arr[index], arr[rightIndex]] = [arr[rightIndex], arr[index]]
      ++minSwaps
    }
  })
  return minSwaps
}

console.log(minimumSwaps(arr))
console.log(minimumSwaps(arr1))
console.log(minimumSwaps(arr2))
console.log(minimumSwaps(arr3))
