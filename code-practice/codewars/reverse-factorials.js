// I'm sure you're familiar with factorials – that is, the product of an integer and all the integers below it.

// For example, 5! = 120, as 5 * 4 * 3 * 2 * 1 = 120

// Your challenge is to create a function that takes any number and returns the number that it is a factorial of. So, if your function receives 120, it should return "5!" (as a string).

// Of course, not every number is a factorial of another. In this case, your function would return "None" (as a string).

// Examples
// 120 will return "5!"
// 24 will return "4!"
// 150 will return "None"

// Direct Link to Challenge
// https://www.codewars.com/kata/58067088c27998b119000451/train/javascript

// Solution 1

function reverseFactorial (num) {
  let currentNum = 1
  while (num > currentNum) {
    // Return none if num is not divisible by currentNum evenly
    if (num % currentNum !== 0) {
      return 'None'
    }
    // Same as num = num / currentNum
    num /= currentNum
    // Increment and the Assign the value to currentNum
    ++currentNum
  }
  if (currentNum === num) {
    return `${currentNum}!`
  }
  return 'None'
}

console.log(reverseFactorial(120)) // 5!
console.log(reverseFactorial(3628800)) // 10!
console.log(reverseFactorial(150)) // 'None'

// Solution 2
// Incorporating factorial function within the reverse factorial function

function reverseFactorial1 (num) {
  let answer = 0
  for (let i = 1; ;i++) {
    if (factorial(i) === num) { answer = `${i}!`; break }
    if (factorial(i) > num) { answer = 'None'; break }
  }
  return answer
}

function factorial (num) {
  return num ? num * factorial(num - 1) : 1
}

console.log(reverseFactorial1(120)) // 5!
console.log(reverseFactorial1(3628800)) // 10!
console.log(reverseFactorial1(150)) // 'None'
console.log(reverseFactorial1(24)) // '4!'
