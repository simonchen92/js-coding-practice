// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/vowel-count/train/javascript

// Solution

const vowels = ['a', 'e', 'i', 'o', 'u']

function getCount (str) {
  let vowelsCount = 0
  for (const letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      vowelsCount++
    }
  }
  return vowelsCount
}

console.log(getCount('abracadabra')) // => 5
console.log(getCount('encyclopedia')) // => 5
console.log(getCount('pizza')) // => 2
