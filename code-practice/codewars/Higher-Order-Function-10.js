// Given the following input array:

// var list1 = [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];

// write a function that adds the username property to each object in the input array:
// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//     username: 'nore2000' }
// ]

// The value of the username property is composed by concatenating:
// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year.
// Please make sure that your function delivers the correct birth year irrespective of when it will be executed,
// for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.

// Notes:
// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.
// Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
// Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

// Direct Link to CodeWar Challenge
// https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames/train/javascript

// Test Case
const list1 = [
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'Ruby'
  },
  {
    firstName: 'Amar',
    lastName: 'V.',
    country: 'Bosnia and Herzegovina',
    continent: 'Europe',
    age: 32,
    language: 'Ruby'
  }
]

const list2 = [
  {
    firstName: 'Sofia',
    lastName: 'P.',
    country: 'Italy',
    continent: 'Europe',
    age: 41,
    language: 'Clojure'
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript'
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby'
  },
  {
    firstName: 'Noa',
    lastName: 'A.',
    country: 'Israel',
    continent: 'Asia',
    age: 40,
    language: 'Ruby'
  },
  {
    firstName: 'Andrei',
    lastName: 'E.',
    country: 'Romania',
    continent: 'Europe',
    age: 59,
    language: 'C'
  },
  {
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 60,
    language: 'C'
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 75,
    language: 'Python'
  },
  {
    firstName: 'Chloe',
    lastName: 'K.',
    country: 'Guernsey',
    continent: 'Europe',
    age: 88,
    language: 'Ruby'
  },
  {
    firstName: 'Viktoria',
    lastName: 'W.',
    country: 'Bulgaria',
    continent: 'Europe',
    age: 98,
    language: 'PHP'
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript'
  }
]

// Solution
function addUsername (list) {
  return list.map(users => {
    users.username = users.firstName.toLowerCase() + users.lastName[0].toLowerCase() + ((new Date().getFullYear()) - users.age)
    return users
  })
}

console.log(addUsername(list1))
console.log(addUsername(list2))
