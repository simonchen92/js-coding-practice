'use strict'
// Write a script to check if something is a palindrome
// Palindrome is if a word is the same if we reverse it

// Solution 1
// Works with a sentence and spacing of different words

const isPalindrome = (string) => {
  // Below is the same as re = /[^A-Za-z0-9]/g;
  // / ... /g It's a global regex. So it'll operate on multiple matches in the string.
  // [ ... ] This creates a character set. Basically it'll match any single character within the listed set of characters.
  // \W_ This matches the inverse of "word characters" and underscores. Any non-word character.
  const re = /[\W_]/g
  // coverts to string to lower case in according to the case mapping; is not much different than .toLowerCase()
  // .replace() function replaces the string with the Regex requirements
  string = string.toLocaleLowerCase().replace(re, '')
  const strLen = string.length // deconstruct to make it easier to read for the for loop
  for (let i = 0; i < strLen / 2; i++) {
    if (string[i] !== string[strLen - i - 1]) {
      return false
    }
  }
  return true
}

console.log('---- This is the first solution ----')
console.log(isPalindrome('mom'))
console.log(isPalindrome('pizza'))
console.log(isPalindrome('level'))
console.log(isPalindrome('odor'))
console.log(isPalindrome('kayak'))
console.log(isPalindrome('A man, a plan, a canal. Panama'))

// Solution 2
// Using built-in function
// Only works with simiplier and singular words

const palindrome = string => {
  const re = /[\W_]/g
  string = string.toLowerCase().replace(re, '')
  const regularStr = string
  const reverseStr = string.split('').reverse().join('')
  return regularStr === reverseStr
}
console.log('---- This is the second solutions ----')
console.log(palindrome('mom'))
console.log(palindrome('pizza'))
console.log(palindrome('level'))
console.log(palindrome('odor'))
console.log(palindrome('kayak'))
console.log(palindrome('A man, a plan, a canal. Panama'))
