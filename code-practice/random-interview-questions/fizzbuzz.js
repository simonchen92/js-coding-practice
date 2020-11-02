// Write a short program that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// Solution 1
// Using the static range of numbers from 1 to 100
// Does not implement the use of having an output

const fizzBuzz = function () {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

console.log(fizzBuzz())

// Solution 2
// Using output is a variable that is overwritten if statement in expression is true

const fizzBuzz1 = function () {
  for (let i = 1; i <= 100; i++) {
    let output = i
    if (i % 3 === 0) { output = 'Fizz' }
    if (i % 5 === 0) { output = 'Buzz' }
    if (i % 5 === 0 && i % 3 === 0) { output = 'FizzBuzz' }
    console.log(output)
  }
}

console.log(fizzBuzz1())

// Solution 3
// Uses concatenation to join words Fizz and Buzz if statements are true
// If output statement is true (string longer than 1) then display the string;
// If output statement is false (empty string) then console log i (the number)

const fizzBuzz2 = function () {
  for (let i = 1; i <= 100; i++) {
    let output = ''
    if (i % 3 === 0) { output += 'Fizz' }
    if (i % 5 === 0) { output += 'Buzz' }
    if (output) {
      console.log(output)
    } else {
      console.log(i)
    }
  }
}

console.log(fizzBuzz2())

// Solution 4
// Redid the above solution to take a max range of numbers from 1 to max

const fizzBuzz3 = function (max) {
  for (let i = 1; i <= max; i++) {
    let output = ''
    if (i % 3 === 0) { output += 'Fizz' }
    if (i % 5 === 0) { output += 'Buzz' }
    if (output) {
      console.log(output)
    } else {
      console.log(i)
    }
  }
}

fizzBuzz3(60)
