/*
You are given a string allowed consisting of distinct characters and an array of strings words. 
A string is consistent if all characters in the string appear in the string allowed.
Return the number of consistent strings in the array words.

Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

Example 3:
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 

Constraints:
1 <= words.length <= 104
1 <= allowed.length <= 26
1 <= words[i].length <= 10
The characters in allowed are distinct.
words[i] and allowed contain only lowercase English letters.

Direct Link
https://leetcode.com/problems/count-the-number-of-consistent-strings/
*/

// Solution
// Creating an array and using two for loops to loop through to get result length

var countConsistentStrings = function (allowed, words) {
  let result = [];

  // use for loop to get individual words in array
  for (let i = 0; i < words.length; i++) {
    word = words[i];

    // now using for loop to get each individual character from word
    for (j = 0; j < word.length; j++) {
      char = word[j];

      if (!allowed.includes(char)) break;
      else if (j === word.length - 1) result.push(word);
    }
  }

  return result.length;
};

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])); // 2
console.log(
  countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']),
); // 7
console.log(
  countConsistentStrings('cad', [
    'cc',
    'acd',
    'b',
    'ba',
    'bac',
    'bad',
    'ac',
    'd',
  ]),
); // 4

// Solution 2
// Using set and reduce

var countConsistentStrings1 = function (allowed, words) {
  // create a unique set of obj of allowed words
  let set = new Set(allowed);

  // use reduce to iterate over all the words in the arr
  return words.reduce((acc, curr) => {
    // split each word in the words arr by individual character
    // then check if every letter/character is present in our set obj of allowed words
    // if true, first increment then return the value
    // if false return the accumalated value
    return curr.split('').every((char) => set.has(char)) ? ++acc : acc;
  }, 0);
};

console.log(
  countConsistentStrings1('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']),
); // 2
console.log(
  countConsistentStrings1('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']),
); // 7
console.log(
  countConsistentStrings1('cad', [
    'cc',
    'acd',
    'b',
    'ba',
    'bac',
    'bad',
    'ac',
    'd',
  ]),
); // 4
