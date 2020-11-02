// Example on how to use sort method

let nums = new Array(10).fill(null)

nums = nums.map(() => (Math.floor(Math.random() * 200) + 1))

// Sort function by default arranged number / strings by ascending order
// Sort also places things into a string by default
// console.log(nums.sort())

// Created a callback function for sorting nums
// When we return 1, the function communicates to sort() that object b takes precedence in sorting over the object a
// Returning -1 would do the opposite.
const sortNums = function (a, b) {
  if (a > b) {
    return 1
  } else if (b > a) {
    return -1
  } else {
    return 0
  }
}

console.log(nums.sort(sortNums))
