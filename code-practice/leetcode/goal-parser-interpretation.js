/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". 
The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Example 1:
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Example 2:
Input: command = "G()()()()(al)"
Output: "Gooooal"

Example 3:
Input: command = "(al)G(al)()()G"
Output: "alGalooG"
 

Constraints:
1 <= command.length <= 100
command consists of "G", "()", and/or "(al)" in some order.

Direct Link
https://leetcode.com/problems/goal-parser-interpretation/
*/

// Solution
// Using a queue

var interpret = function (command) {
  let arr = [];
  let temp = '';
  let result = '';

  for (let letter of command) {
    arr.push(letter);
  }

  let first = arr.shift();

  while (first != null) {
    temp = temp + first;
    if (temp === 'G') {
      result += 'G';
      temp = '';
    }
    if (temp === '()') {
      result += 'o';
      temp = '';
    }
    if (temp === '(al)') {
      result += 'al';
      temp = '';
    }
    first = arr.shift();
  }
  return result;
};

console.log(interpret('G()(al)')); // "Goal"
console.log(interpret('G()()()()(al)')); // "Gooooal"
console.log(interpret('(al)G(al)()()G')); // "alGalooG"

// Solution 2
// Using split and join

var interpret1 = function (command) {
  return command.split('()').join('o').split('(al)').join('al');
};

console.log(interpret1('G()(al)')); // "Goal"
console.log(interpret1('G()()()()(al)')); // "Gooooal"
console.log(interpret1('(al)G(al)()()G')); // "alGalooG"

// Solution 3
// Using RegEx & replace method

var interpret2 = function (command) {
  return command.replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o');
};

console.log(interpret2('G()(al)')); // "Goal"
console.log(interpret2('G()()()()(al)')); // "Gooooal"
console.log(interpret2('(al)G(al)()()G')); // "alGalooG"
