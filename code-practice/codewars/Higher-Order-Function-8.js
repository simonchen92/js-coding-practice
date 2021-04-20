// You will be given an array of objects (associative arrays in PHP) representing data about developers
// who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by
// at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.

// false otherwise.

// For example, given the following input array:
// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];

// your function should return true as there is at least one developer from the required 5 geographic zones.

// Notes:

// The input array and continent names will always be valid and formatted as in the list above
// for example 'Africa' will always start with upper-case 'A'

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented/train/javascript

// Test Use

const list1 = [
  {
    firstName: 'Fatima',
    lastName: 'A.',
    country: 'Algeria',
    continent: 'Africa',
    age: 25,
    language: 'JavaScript',
  },
  {
    firstName: 'Agustín',
    lastName: 'M.',
    country: 'Chile',
    continent: 'Americas',
    age: 37,
    language: 'C',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Laia',
    lastName: 'P.',
    country: 'Andorra',
    continent: 'Europe',
    age: 55,
    language: 'Ruby',
  },
  {
    firstName: 'Oliver',
    lastName: 'Q.',
    country: 'Australia',
    continent: 'Oceania',
    age: 65,
    language: 'PHP',
  },
];

const list2 = [
  {
    firstName: 'Fatima',
    lastName: 'A.',
    country: 'Algeria',
    continent: 'Africa',
    age: 25,
    language: 'JavaScript',
  },
];

// Solution 1
// Using Reduce

function allContinent(list) {
  return (
    Object.keys(
      list.reduce((acc, curr) => {
        acc[curr.continent] = curr.continent;
        return acc;
      }, {}),
    ).length === 5
  );
}

// Solution 2
// Using Set

function allContinents(list) {
  return new Set(list.map((dev) => dev.continent)).size === 5;
}

// Solution 3
// Using includes

function allContinents(list) {
  const continents = list.map((dev) => dev.continent);
  return continents.includes(
    'Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania',
  );
}

// Solution 4
// Using Traditional For Loop

function allContinents(list) {
  let continent = [];
  for (let i = 0; i < list.length; i++) {
    let devContinent = list[i].continent;
    if (continent.indexOf(devContinent) === -1) {
      continent.push(devContinent);
    }
  }
  if (continent.length === 5) {
    return true;
  } else {
    return false;
  }
}

console.log(allContinent(list1)); // true
console.log(allContinent(list2)); // false
