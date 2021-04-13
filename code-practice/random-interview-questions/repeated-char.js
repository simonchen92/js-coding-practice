/* 
You are given three strings, “kasjfhhi” “yyjknaalkjs” “anewunnsii”. Using your favorite language,
Write a function called repeatedChar which returns the first letter of each string that occurs twice in a row in a new string

Example #1: 
Input : “kasjfhhi”
Output : h

Example #2: 
Input : “yyjknaalkjs”
Output : y

Example #3: 
Input:  “anewunnsii”
Output : n
*/

// Solution

const repeatedChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let char2 = str[i + 1];

    if (char === char2) {
      return char;
    }
  }
};

console.log(repeatedChar('kasjfhhi')); // h
console.log(repeatedChar('yyjknaalkjs')); // y
console.log(repeatedChar('anewunnsii')); // n
