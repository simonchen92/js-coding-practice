/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0
 

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

Direct Link
https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

// Solution 1
// Using Map
var lengthOfLongestSubstring = function(s) {
  // create a hash to store the char
  let seen = new Map();
  // keep track of starting index of current substring
  let start = 0;
  // keep track of max length
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      // if the current char was seen, move the start to (1 + the last index of this char)
      start = Math.max(seen.get(s[i]) + 1, start);
    }
    seen.set(s[i], i);
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0

// Solution 2
// Using Set

function lengthOfLongestSubstring1(s) {
  // Create new hash to store values
  let seen = new Set();
  let longest = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    // if the value has been seen
    while (seen.has(s[i])) {
      // delete the value from string
      seen.delete(s[start]);
      // increment pointer
      start++;
    }
    // if not seen, add the value to the hash
    seen.add(s[i]);
    console.log('set is:', seen);
    longest = Math.max(longest, i - start + 1);
  }
  return longest;
}

console.log(lengthOfLongestSubstring1("abcabcbb")); // 3
console.log(lengthOfLongestSubstring1("bbbbb")); // 1
console.log(lengthOfLongestSubstring1("pwwkew")); // 3
console.log(lengthOfLongestSubstring1("")); // 0
