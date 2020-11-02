// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// Direct Link
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// Solution 1 using for loop
function sortArray (array) {
  const oddArr = []
  const evenArr = []
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i])
    } else {
      oddArr.push(array[i])
    }
  }

  oddArr.sort((a, b) => a - b)

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(evenArr.shift())
    } else {
      result.push(oddArr.shift())
    }
  }
  return result
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])) // [1, 3, 5, 8, 0]

// Solution 2 alternate way to use for loop

function sortArray1 (array) {
  const odd = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i])
    }
  }

  odd.sort((a, b) => a - b)

  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 !== 0) {
      array[j] = odd.shift()
    }
  }
  return array
}

console.log(sortArray1([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]
console.log(sortArray1([5, 3, 1, 8, 0])) // [1, 3, 5, 8, 0]

// Solution 3 using filter and map

function sortArray2 (array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b)
  return array.map(x => x % 2 ? odd.shift() : x)
}

console.log(sortArray2([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]
console.log(sortArray2([5, 3, 1, 8, 0])) // [1, 3, 5, 8, 0]
