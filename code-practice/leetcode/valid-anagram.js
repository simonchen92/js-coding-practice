// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

// Direct Link to Leetcode Problem
// https://leetcode.com/problems/valid-anagram/

// Test Case
const s = 'anagram'
const t = 'nagaram'

const s1 = 'rat'
const t1 = 'car'

// Solution

const isAnagram = (s, t) => {
  return s.split('').sort().join('') === t.split('').sort().join('')
}

console.log(isAnagram(s, t))
console.log(isAnagram(s1, t1))
