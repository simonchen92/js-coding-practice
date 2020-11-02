// Write a functional factorial
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120
// By convention the value of 0! is 1

// Solution 1
// A more laid out method using for loop and reduce

function factorial (n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr.reduce((a, b) => a * b, 1)
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040
console.log(factorial(17)) // 355687428096000

// Solution Two
// Using recursion

function factorial1 (n) {
  return n ? n * factorial1(n - 1) : 1
}

console.log(factorial1(0)) // 1
console.log(factorial1(1)) // 1
console.log(factorial1(9)) // 362880
console.log(factorial1(13)) // 6227020800
console.log(factorial1(10)) // 3628800
console.log(factorial1(8)) // 40320
