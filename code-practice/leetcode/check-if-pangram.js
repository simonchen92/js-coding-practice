/*
A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.


Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:
Input: sentence = "leetcode"
Output: false
 

Constraints:
1 <= sentence.length <= 1000
sentence consists of lowercase English letters.

Direct Link
https://leetcode.com/problems/check-if-the-sentence-is-pangram/
*/

// Solution
// Using Set

var checkIfPangram = function (sentence) {
  return new Set(sentence).size === 26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')); // true
console.log(checkIfPangram('leetcode')); // false

// Solution 2
// Using Hashmap

var checkIfPangram2 = function (sentence) {
  if (sentence.length < 26 || typeof sentence !== 'string') return false;

  let hash = {};
  for (let i = 0; i < sentence.length; i++) {
    // Would count letters as 1 even if it has appeared more than once
    hash[sentence[i]] = 1;
  }
  console.log(hash);

  return Object.keys(hash).length === 26 ? true : false;
};

console.log(checkIfPangram2('thequickbrownfoxjumpsoverthelazydog')); // true
console.log(checkIfPangram2('leetcode')); // false
console.log(checkIfPangram2('asdfghjklkjhgfdsasdfghjklkjhgsdfgshsj')); // false
