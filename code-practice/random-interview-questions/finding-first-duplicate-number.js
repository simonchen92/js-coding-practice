// loop through the array
// find first reoccuring duplicate

const array = [3, 5, 6, 8, 5, 3] // =>  Answer should be 5
const array1 = [1, 3, 4, 2, 1, 3] // => Answer should be 1

const firstDupe = input => {
  return input.find((num, index) => input.indexOf(num) !== index)
}

console.log(firstDupe(array))
console.log(firstDupe(array1))
