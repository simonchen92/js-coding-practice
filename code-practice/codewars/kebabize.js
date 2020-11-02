/**

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters

Direct Link
https://www.codewars.com/kata/57f8ff867a28db569e000c4a/javascript

*/

// Solution 1
function kebabize(str) {
  let arr = str.split('').filter((word) => isNaN(word));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = '-' + arr[i].toLowerCase();
    }
  }
  // RegEx check to see if a string starts with '-' if so, remove it
  return arr.join('').replace(/^-/, '');
}

console.log(kebabize('myCamelCasedString'));
console.log(kebabize('myCamelHas3Humps'));

// Solution 2
function kebabize1(str) {
  return str
    .split('')
    .filter((word) => isNaN(parseInt(word)))
    .map((string) =>
      string.toUpperCase() === string
        ? string.replace(string, '-' + string.toLowerCase())
        : string.toLowerCase(),
    )
    .join('')
    .replace(/^-/, '');
}

console.log(kebabize1('myCamelCasedString'));
console.log(kebabize1('myCamelHas3Humps'));

// Solution 3
// RegEx solution

function kebabize2(str) {
  return str
    .replace(/\d/g, '')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

console.log(kebabize2('myCamelCasedString'));
console.log(kebabize2('myCamelHas3Humps'));
