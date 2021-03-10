/*
Your job is to write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

Direct Link
https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
*/

// Solution
function incrementString(string) {
  // create regex to search for number in string
  let regex = /[0-9]/g;
  // get the index at which the first number occurs
  let numIndex = string.search(regex);

  let arr = [];

  // if number or string does not exist then push 1 at the end of the string
  if (numIndex === -1 || string === '') {
    return string + '1';
  } else {
    arr.push(
      string.substring(0, numIndex), // from the start of string up to index of the first number
      string.substring(numIndex, string.length), // from the first index of the number up to length of string
    );
  }
  // Create second arr which holds the numbers in the string
  let numArr = arr[1].split('');

  // we do a loop starting at the end of the number string and move left
  for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i] < 9) {
      numArr[i]++;
      break;
    } else if (i === 0 && numArr[i] == 9) {
      numArr[i] = 10;
    } else if (numArr[i] == 9) {
      numArr[i] = 0;
    }
  }
  numArr = numArr.join('');
  return arr[0] + numArr;
}

console.log(incrementString('foobar000')); // "foobar001"
console.log(incrementString('foo')); // "foo1"
console.log(incrementString('foobar001')); // "foobar002"
console.log(incrementString('foobar99')); // "foobar100"
console.log(incrementString('foobar099')); // "foobar100"
console.log(incrementString('')); // "1"
