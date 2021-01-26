/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

// Solution

function toCamelCase(str) {
  // RegEx to split on special characters
  let newStr = str.split(/[^A-Za-z]/);

  if (str === '') {
    return '';
  }

  let firstWord = newStr[0];

  for (let i = 1; i < newStr.length; i++) {
    firstWord += capitalized(newStr[i]);
  }
  return firstWord;
}

// Helper function to capitalize words
function capitalized(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(toCamelCase('the-stealth-warrior')); // returns "theStealthWarrior"
console.log(toCamelCase('The_Stealth_Warrior')); // returns "TheStealthWarrior"
