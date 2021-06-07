/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Example 3:
Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
 
Constraints:
1 <= word1.length, word2.length <= 103
1 <= word1[i].length, word2[i].length <= 103
1 <= sum(word1[i].length), sum(word2[i].length) <= 103
word1[i] and word2[i] consist of lowercase letters.

Direct Link
https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
*/

// Solution
// Using reduce and comparing the words

var arrayStringsAreEqual = function (word1, word2) {
  let arr1 = word1.reduce((acc, curr) => acc + curr);
  let arr2 = word2.reduce((acc, curr) => acc + curr);

  return arr1 === arr2;
};

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc'])); // true
console.log(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c'])); // false

// Smart & Clever Solution
// Using join and comparing it

var arrayStringsAreEqual2 = function (word1, word2) {
  return word1.join('') === word2.join('');
};

console.log(arrayStringsAreEqual2(['ab', 'c'], ['a', 'bc'])); // true
console.log(arrayStringsAreEqual2(['a', 'cb'], ['ab', 'c'])); // false
