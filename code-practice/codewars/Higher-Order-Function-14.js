// You will be given an array of objects representing data about developers
// who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
//     meal: 'vegetarian' },
// ];

// your function should return the following object (the order of properties does not matter): { vegetarian: 2, standard: 1, vegan: 1 }

// Notes:
// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food/train/javascript

// Test Case
const list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
    meal: 'vegetarian'
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
    meal: 'standard'
  },
  {
    firstName: 'Ramona',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
    meal: 'vegan'
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
    meal: 'vegetarian'
  }
]

const list2 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
    meal: 'vegetarian'
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
    meal: 'standard'
  },
  {
    firstName: 'Ramona',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
    meal: 'vegan'
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
    meal: 'standard'
  },
  {
    firstName: 'Noel',
    lastName: 'O.',
    country: 'Albania',
    continent: 'Europe',
    age: 23,
    language: 'Python',
    meal: 'gluten-intolerant'
  },
  {
    firstName: 'Fatima',
    lastName: 'A.',
    country: 'Algeria',
    continent: 'Africa',
    age: 25,
    language: 'JavaScript',
    meal: 'standard'
  },
  {
    firstName: 'Laia',
    lastName: 'P.',
    country: 'Andorra',
    continent: 'Europe',
    age: 55,
    language: 'Ruby',
    meal: 'gluten-intolerant'
  },
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
    meal: 'diabetic'
  },
  {
    firstName: 'Nareh',
    lastName: 'Q.',
    country: 'Armenia',
    continent: 'Europe',
    age: 30,
    language: 'Clojure',
    meal: 'standard'
  },
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript',
    meal: 'standard'
  }
]

// Solution
function orderFood (list) {
  const mealCount = {}
  list.forEach(options => {
    if (mealCount[options.meal]) {
      mealCount[options.meal]++
    } else {
      mealCount[options.meal] = 1
    }
  })
  return mealCount
}

console.log(orderFood(list1))
console.log(orderFood(list2))

// Solution 2 after refactoring the answer from the first solution and making it easier to read
function orderFood1 (list) {
  const mealCount = {}
  // eslint-disable-next-line no-return-assign
  list.forEach(
    options => (mealCount[options.meal] = (mealCount[options.meal] || 0) + 1)
  )
  return mealCount
}

console.log(orderFood1(list1))
console.log(orderFood1(list2))
