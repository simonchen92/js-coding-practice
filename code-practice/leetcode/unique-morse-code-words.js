/**
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. 
For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). 
We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".

Note:
The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
words[i] will only consist of lowercase letters.

Direct Link
https://leetcode.com/problems/unique-morse-code-words/
 */

// Solution
let uniqueMorseRepresentations = function (words) {
  let morseCode = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };

  // Want to return unique representation of each word
  return new Set(
    words.map((word) =>
      word
        // Mapping out each word in the array
        .split('')
        // Mapping again to get each individual letter of the word in the array and assign it the morse code value
        .map((letter) => morseCode[letter])
        .join(''),
    ),
    // .size is a function unique to Set to get the length of something (similar to .length)
  ).size;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])); // 2
