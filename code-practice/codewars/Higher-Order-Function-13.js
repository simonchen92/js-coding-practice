// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup
// that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

// Your task is to return either:
// true if the number of meetup participants representing any of the three programming languages is at most 2 times higher than the number of developers
// representing any of the remaining programming languages or
// false otherwise.

// For example, given the following input array:
// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
//   { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
// ];

// your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1).
// It can't be more than 2 times higher to be regarded as language-diverse.

// Notes:
// The strings representing all three programming languages will always be formatted in the same way
// (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
// The input array will always be valid and formatted as in the example above.
// Each of the 3 programming languages will always be represented.

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse/train/javascript

// Test Case

const list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]

const list2 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]

const list3 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]

const list4 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]

// Solution

const isLanguageDiverse = list => {
  // using reduce to count the languages of the developers attending the meetup
  const countLanguage = list.reduce((acc, curr) => ({ ...acc, [curr.language]: (acc[curr.language] || 0) + 1 }), {})
  // we are getting the values from they key value pairs in the array by mapping the keys
  const values = Object.keys(countLanguage).map(value => countLanguage[value])
  // taking the least popular language multiply by 2 to equal the max value of the most popular language
  return Math.min(...values) * 2 >= Math.max(...values)
}

console.log(isLanguageDiverse(list1))
console.log(isLanguageDiverse(list2))
console.log(isLanguageDiverse(list3))
console.log(isLanguageDiverse(list4))

// Solution 2 using forEach and if statements for more readability of code

const isLanguageDiverse1 = list => {
  const count = [0, 0, 0]

  list.forEach(person => {
    if (person.language === 'Python') {
      count[0]++
    } else if (person.language === 'Ruby') {
      count[1]++
    } else if (person.language === 'JavaScript') {
      count[2]++
    }
  })

  const min = Math.min.apply(null, count)
  const max = Math.max.apply(null, count)

  if (max <= min * 2) {
    return true
  } else if (max > min * 2) {
    return false
  }
}

console.log(isLanguageDiverse1(list1))
console.log(isLanguageDiverse1(list2))
console.log(isLanguageDiverse1(list3))
console.log(isLanguageDiverse1(list4))
