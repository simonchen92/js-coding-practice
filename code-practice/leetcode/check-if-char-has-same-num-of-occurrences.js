/*
Given a string s, return true if s is a good string, or false otherwise.
A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).


Example 1:
Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

Example 2:
Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 

Constraints:
1 <= s.length <= 1000
s consists of lowercase English letters.

Direct Link
https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
*/

// Solution
const areOccurrencesEqual = function(s) {
  // create an obj to store seen values
  let obj = {};

  // count the number of occurrences for each character
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  let occurrences = new Set(Object.values(obj));
  if (occurrences.size === 1) return true;
  return false;
};

console.log(areOccurrencesEqual("abacbc")); // true
console.log(areOccurrencesEqual("aaabb")); // false
console.log(areOccurrencesEqual("tveixwaeoezcf")); // false
