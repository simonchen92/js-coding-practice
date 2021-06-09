// You will be given an array of objects representing data about developers who have signed up
// to attend the next coding meetup that you are organising.

// Given the following input array:
// var list1 = [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];

// write a function that

// 1) adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value).
// The value of the question property should be the following string: Hi, could you please provide your <property name>.

// 2) and returns only the developers with missing details:
// [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//   question: 'Hi, could you please provide your firstName.' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
//   question: 'Hi, could you please provide your language.' }
// ]

// Notes:
// At most only one of the values will be null.
// Preserve the order of the original list.
// Return an empty array [] if there is no developer with missing details.
// The input array will always be valid and formatted as in the example above.

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details/train/javascript

// Test Case
const list1 = [
  {
    firstName: null,
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: null,
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

const list2 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

// Solution

const askForMissingDetails = (list) =>
  list.filter((dev) =>
    Object.keys(dev).some(
      (key) =>
        dev[key] === null &&
        (dev.question = `Hi, could you please provide your ${key}.`),
    ),
  );

console.log(askForMissingDetails(list1));
console.log(askForMissingDetails(list2));

// Solution 2

function askForMissingDetails2(list) {
  return list.filter((dev) => {
    for (let key in dev) {
      if (dev[key] === null) {
        dev['question'] = `Hi, could you please provide your ${key}.`;
        return dev;
      }
    }
  });
}

console.log(askForMissingDetails2(list1));
console.log(askForMissingDetails2(list2));
