// You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character.
// The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters.
// No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.

// If the string matches, return true else false.

// For example:
// solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string.
// solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string.
// solve("codewars","codewars") = true, because the strings already match.
// solve("a","b") = false

// Direct link to Challenge
// https://www.codewars.com/kata/5bc052f93f43de7054000188/train/javascript

// Solution

function solve (a, b) {
  // Check if string a and b match
  if (a === b) return true
  // Split first a input by the '*'
  const splitStr = a.split('*')
  // Check to see if B starts and end with the same characters
  // also check if the length of two words are similar and if so, spit out true or false
  return b.startsWith(splitStr[0]) && b.endsWith(splitStr[1]) && a.length <= b.length + 1
}

console.log(solve('code*s', 'codewars')) // True
console.log(solve('codewar*s', 'codewars')) // True
console.log(solve('aaa*', 'aa')) // False
console.log(solve('codewars', 'codewars')) // True
console.log(solve('a', 'b')) // False
console.log(solve('code*warrior', 'codewars')) // False
console.log(solve('aaa', 'aa')) // False
console.log(solve('*', 'codewars')) // True
