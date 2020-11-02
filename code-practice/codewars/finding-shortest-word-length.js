// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/shortest-word/train/javascript

// Solution 1 using reduce

function findShort (s) {
  s = s.split(' ')
  const shortest = s.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord
  }, s[0])
  return shortest.length
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
console.log(findShort('turns out random test cases are easier than writing out basic ones'))

// Solution 2 using map

function findShort1 (s) {
  return Math.min(...s.split(' ').map(s => s.length))
}

console.log(findShort1('bitcoin take over the world maybe who knows perhaps'))
console.log(findShort1('turns out random test cases are easier than writing out basic ones'))
