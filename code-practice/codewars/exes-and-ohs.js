/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Direct Link
https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
*/

// Solution

function XO(str) {
  // Let equal be the count of X and O
  let equal = 0;
  str.split("").forEach((char) => {
    // If string contains X then increment equal count by 1
    "x" === char.toLowerCase() && equal++;
    // If string contains O then we decrement equal count by -1
    "o" === char.toLowerCase() && equal--;
  });
  return equal === 0;
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);

// Solution 2
// Using Regex

function XO1(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);

    return (x && x.length) === (o && o.length);
}

console.log(XO1("xo"), true);
console.log(XO1("xxOo"), true);
console.log(XO1("xxxm"), false);
console.log(XO1("Oo"), false);
console.log(XO1("ooom"), false);