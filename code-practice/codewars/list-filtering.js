// In this kata you will create a function that takes a list of non-negative integers and strings
// and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

// Test Cases

const test = [1, 2, 'a', 'b']
const test1 = [1, 'a', 'b', 0, 15]
const test2 = [1, 2, 'aasf', '1', '123', 123]

// Solution

function filterList (l) {
  return l.filter(num => {
    if (typeof num === 'number') {
      return true
    }
  })
}

console.log(filterList(test))
console.log(filterList(test1))
console.log(filterList(test2))
