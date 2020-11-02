/*
Write a function tha treceives an array 'arr' of integers and an integers 'n'
that is greater than 0 as an arguments and return two indexes of a sebsequence
in the array that adds up to equal the value of 'n'.

Facebook Interview Question Examples
*/

// input: [1, 2, 1, 7, 5, 4], 17
// output: [2, 5]

function subsequenceSum (arr, n) {
  let firstIndex = 0
  let lastIndex = 1
  let sum = arr[firstIndex] + arr[lastIndex]

  // if we get passed the last index return undefined / false
  while (arr[lastIndex]) {
    if (sum === n) {
      return [firstIndex, lastIndex]
      // added more value if sum is less than n
      // increment sum by last index
    } else if (sum < n) {
      lastIndex++
      sum += arr[lastIndex]
      // if sum is greater than n
      // we are going to remove the first index from our array from our sum
      // then increment first index
    } else {
      sum -= arr[firstIndex]
      firstIndex++
    }
  }
  return false
}

console.log(subsequenceSum([1, 2, 1, 7, 5, 4], 17))
