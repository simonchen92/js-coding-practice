// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// Test
const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const test1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const test2 = [6, 1, 7, 8, 8, 8, 4, 3, 2, 1]

// Solution 1
// Hard Coding
function createPhoneNumber (numbers) {
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9]
}

console.log('--- Solution 1 ---')
console.log(createPhoneNumber(test))
console.log(createPhoneNumber(test1))
console.log(createPhoneNumber(test2))

// Solution 2
function createPhoneNumber1 (numbers) {
  const num = numbers.join('')
  return `(${num.substring(0, 3)}) ${num.substring(3, 6)}-${num.substring(6)}`
}

console.log('--- Solution 2 ---')
console.log(createPhoneNumber1(test))
console.log(createPhoneNumber1(test1))
console.log(createPhoneNumber1(test2))

// Solution 3
function createPhoneNumber2 (numbers) {
  let mask = '(xxx) xxx-xxxx'
  // for loop
  // for (let i = 0; i < numbers.length; i++) {
  //   mask = mask.replace('x', numbers[i])
  // }
  numbers.forEach(num => {
    mask = mask.replace('x', num)
  })
  return mask
}

console.log('--- Solution 3 ---')
console.log(createPhoneNumber2(test))
console.log(createPhoneNumber2(test1))
console.log(createPhoneNumber2(test2))
