// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H
// Patrick Feeney => P.F

// Direct Link
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// Solution

function abbrevName (name) {
  const input = name.split(' ')
  const firstNameInitial = input[0].charAt(0).toUpperCase()
  const lastNameInitial = input[1].charAt(0).toUpperCase()
  return `${firstNameInitial}.${lastNameInitial}`
}

console.log(abbrevName('Simon Chen'))
console.log(abbrevName('Sam Harris'))
console.log(abbrevName('Patrick Feeney'))
