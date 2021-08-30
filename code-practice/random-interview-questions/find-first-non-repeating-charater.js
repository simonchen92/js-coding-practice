/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it.
If there is no such character, return '_'.

Example:
s = "abacabad" 
output = "c"

s = "aaabcccdeeef"
output = "b"

*/

// Solution 1
// Brute Force

const firstNonRepeatingCharacter = (s) => {
    for (let i = 0; i < s.length; i++) {
        let seenDupe = false;
        for (let j = 0; j < s.length; j++) {
            if (s.charAt(i) === s.charAt(j) && (i !== j)) {
                seenDupe = true;
            }
        }
        if (!seenDupe) return s.charAt(i);
    }
    return '_';
};

console.log(firstNonRepeatingCharacter("abacabad")); // "c"
console.log(firstNonRepeatingCharacter("aaabcccdeeef")); // "b"
console.log(firstNonRepeatingCharacter("abcabcabc")); // "_"

// Solution 2
// Using hash map

const firstNonRepeatingCharacter2 = (s) => {
    let charCounts = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        // Get counts of letter appearance
        if (charCounts.has(char)) {
            // If hash map has letter, increase count by 1
            charCounts.set(char, charCounts.get(char) + 1);
        } else {
            // If hash map doesnt have letter, then set count to 1
            charCounts.set(char, 1);
        }
    }

    for (let j = 0; j < s.length; j++) {
        const char = s.charAt(j);
        // Look through our hash and if there is a charCount of 1 then return that char
        if (charCounts.get(char) === 1) {
            return char;
        }
    }

    return '_';
};


console.log(firstNonRepeatingCharacter2("abacabad")); // "c"
console.log(firstNonRepeatingCharacter2("aaabcccdeeef")); // "b"
console.log(firstNonRepeatingCharacter2("abcabcabc")); // "_"

// Clever Solution
// Using indexOf and lastIndexOf

const firstNonRepeatingCharacter3 = (s) => {
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            return char;
        }
    }

    return '_';
};


console.log(firstNonRepeatingCharacter3("abacabad")); // "c"
console.log(firstNonRepeatingCharacter3("aaabcccdeeef")); // "b"
console.log(firstNonRepeatingCharacter3("abcabcabc")); // "_"