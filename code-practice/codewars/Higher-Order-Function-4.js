// You will be given an array of objects (associative arrays in PHP) representing data about developers
// who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:
// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.

// For example, given the following input array:
// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];
// your function should return Victoria, Puerto Rico

// Direct link to Codewar Challenge
// https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer/train/javascript

// Test Use
const list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
]

const list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' }
]

// Solution 1

function getFirstPython (list) {
  const dev = list.find(x => x.language === 'Python')
  return dev ? `${dev.firstName}, ${dev.country}` : 'There will be no Python developers'
}

console.log(getFirstPython(list1))
console.log(getFirstPython(list2))

// Solution 2 one - liner

const getFirstPython1 = list => list.find(dev => dev.langage === 'Python' ? `${dev.firstName}, ${dev.country}` : 'There will be no Python developers')

console.log(getFirstPython1(list1))
console.log(getFirstPython1(list2))
