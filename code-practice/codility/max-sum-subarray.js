/*
Data Structure and Algorithm Question (Taken from Codility)

Write a function that given an array a consisting of n integers noting the number of apples on each apple tree in the row,
and integers k and l denoting, respectively the number of trees that alice and bob can choose when collecting,
returns the maximum number of apples that can be collected by them or -1 if there are no such intervals

*/

// Test
// const test1 = ([6, 1, 4, 6, 3, 2, 7, 4], 3, 2) // 24
// const test2 = ([10, 19, 15], 2, 2) // -1

// Solution
// The solution below is used to find K first then trying to find L.
// L may exist before K or after K
const solution = function (A, K, L) {
  if (A.length < K + L) {
    return -1
  }
  // create a new subarray of sums of values
  const arr = [0]
  for (const a of A) {
    arr.push(arr[arr.length - 1] + a)
  }
  let total = 0
  // Loop through arr to find value of kApples
  for (let i = 0; i < arr.length - K; i++) {
    const kApples = arr[i + K] - arr[i]
    let curr = i - 1
    // if value of current iteration is greater than 0 then move left to right
    while (curr - L >= 0) {
      const currApple = arr[curr] - arr[curr - L]
      total = Math.max(total, currApple + kApples)
      curr--
    }
    curr = i + K
    // if value of current iteration is less than the length of array length then move right to left
    while (curr + L < arr.length) {
      const currApple = arr[curr + L] - arr[curr]
      total = Math.max(total, currApple + kApples)
      curr++
    }
  }
  return total
}

console.log(solution([6, 1, 4, 6, 3, 2, 7, 4], 3, 2)) // 24
console.log(solution([10, 19, 15], 2, 2)) // -1
