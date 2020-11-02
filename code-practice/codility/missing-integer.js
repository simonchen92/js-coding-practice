
// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000]

// Test
const A = [1, 3, 6, 4, 1, 2] // 5
const A1 = [1, 2, 3] // 4
const A2 = [-1, -3] // 1

// Solution

function solution (A) {
  const set = new Set(A)
  let i = 1
  while (set.has(i)) {
    i++
  }
  return i
}

console.log(solution(A))
console.log(solution(A1))
console.log(solution(A2))
