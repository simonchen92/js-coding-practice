// write a function that takes in an array of numbers
// returns an array the numbers that appears more than once

const findDupes = num => {
  // loop an array of numbers
  // filter out numbers that does not occur more than once
  const filteredArr = num.filter((item, index) => {
    return num.indexOf(item) !== index
  })
  // filter out numbers that appear more than once
  return filteredArr.filter((item, index) => {
    return filteredArr.indexOf(item) === index
  })
}

console.log(findDupes([1, 2, 2, 3, 3, 4, 5]))
console.log(findDupes([5, 3, 2, 3, 6, 5, 8]))
console.log(findDupes([5, 3, 2, 3, 6, 5, 8, 5, 5]))
