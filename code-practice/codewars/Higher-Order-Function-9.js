// You will be given an array of objects (associative arrays in PHP) representing data about
// developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up:
// teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.

// For example, given the following input array:
// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];

// your function should return true as there is at least one developer from each age group.

// Notes:
// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199

// Direct Link to CodeWar Challenge
// https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse/train/javascript

// Test Case

const list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
]

const list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' }
]

const list3 = [
  { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
  { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
]

// Solution 1 using for loops

function isAgeDiverse (list) {
  let teens = 0
  let twenties = 0
  let thirties = 0
  let forties = 0
  let fifties = 0
  let sixties = 0
  let seventies = 0
  let eighties = 0
  let nineties = 0
  let centenarian = 0

  for (let i = 0; i < list.length; i++) {
    if (list[i].age >= 10 && list[i].age < 20) {
      teens = 1
    }
    if (list[i].age >= 20 && list[i].age < 30) {
      twenties = 1
    }
    if (list[i].age >= 30 && list[i].age < 40) {
      thirties = 1
    }
    if (list[i].age >= 40 && list[i].age < 50) {
      forties = 1
    }
    if (list[i].age >= 50 && list[i].age < 60) {
      fifties = 1
    }
    if (list[i].age >= 60 && list[i].age < 70) {
      sixties = 1
    }
    if (list[i].age >= 70 && list[i].age < 80) {
      seventies = 1
    }
    if (list[i].age >= 80 && list[i].age < 90) {
      eighties = 1
    }
    if (list[i].age >= 90 && list[i].age < 100) {
      nineties = 1
    }
    if (list[i].age >= 100 && list[i].age < 200) {
      centenarian = 1
    }
  }
  const isAllAges = teens + twenties + thirties + forties + fifties + sixties + seventies + eighties + nineties + centenarian

  if (isAllAges === 10) {
    return true
  } else {
    return false
  }
}

console.log(isAgeDiverse(list1))
console.log(isAgeDiverse(list2))
console.log(isAgeDiverse(list3))

// Solution 2 using every and some higher order function

function isAgeDiverse1 (list) {
  const ages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  return ages.every(function (age) {
    return list.some(function (ageGroup) {
      return (ageGroup.age - age < 10 && ageGroup.age - age >= 0) || (ageGroup.age >= 100 && age === 100)
    })
  })
}

console.log(isAgeDiverse1(list1))
console.log(isAgeDiverse1(list2))
console.log(isAgeDiverse1(list3))
