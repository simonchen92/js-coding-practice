// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];
// your function should return the following array:

// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   }
// ];

// Notes:
// The order of the properties in the objects does not matter.
// The input array will always be valid and formatted as in the example above.

// Designed to allow mastering the use of higher-order functions.
// In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex
// Other approaches to solving the katas are of course possible

// Direct link to Codewar Challenge
// https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers/train/javascript

// Test Case
const list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
]

// Example of answer to list1
// const answer = [
//   { firstName: 'Sofia',
//     lastName: 'I.',
//     country: 'Argentina',
//     continent: 'Americas',
//     age: 35,
//     language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 35,
//     language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison',
//     lastName: 'U.',
//     country: 'United States',
//     continent: 'Americas',
//     age: 32,
//     language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   }
// ]

// Solution 1

const greetDevelopers = list => {
  list.forEach(developers => {
    developers.greeting = `Hi ${developers.firstName}, what do you like the most about ${developers.language}?`
  })
  return list
}

console.log(greetDevelopers(list1))

// Solution 2

const addGreeting = person => {
  person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`
  return person
}

function greetDevelopers1 (developers) {
  addGreeting(developers[0])
  return developers.map(addGreeting)
}

console.log(greetDevelopers1(list1))
