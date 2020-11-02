// You will be given an array of objects (associative arrays in PHP) representing data
// about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:
// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Notes:
// The input array will always be valid and formatted as in the example above.

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming/train/javascript

// Test Use
const list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
]

const list2 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' }
]

// Solution 1

function isRubyComing (list) {
  return list.some(developers => developers.language === 'Ruby')
}

console.log(isRubyComing(list1))
console.log(isRubyComing(list2))

// Solution 2 one-liner

const isRubyComing1 = list => list.some(developers => developers.language === 'Ruby' ? developers : false)

console.log(isRubyComing1(list1))
console.log(isRubyComing1(list2))
