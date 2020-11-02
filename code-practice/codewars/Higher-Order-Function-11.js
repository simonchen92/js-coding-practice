// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup
// that you are organizing.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// write a function that returns the average age of developers (rounded to the nearest integer).
// In the example above your function should return 50 (number).

// Notes:
// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/coding-meetup-number-11-higher-order-functions-series-find-the-average-age/train/javascript

// Test Case
const list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' }
]

const list2 = [
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' }
]

// Solution 1 using map and reduce

function getAverageAge (list) {
  return Math.round(list.map(person => person.age).reduce((acc, curr) => acc + curr) / list.length)
}

console.log(getAverageAge(list1))
console.log(getAverageAge(list2))

// Solution 2 using just reduce to reduce time complexity

function getAverageAge1 (list) {
  return Math.round(list.reduce((acc, curr) => acc + curr.age, 0) / list.length)
}

console.log(getAverageAge1(list1))
console.log(getAverageAge1(list2))
