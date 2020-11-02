// How to iterate through a multidimensional array

// Example
const arr = [
  ['apple', 'orange', 'pear'],
  ['carrots', 'beans', 'peas'],
  ['cookies', 'cake', 'muffins', 'pie']
]

// Solution 1 = Using two for loops to iterate through
// outer loop applies to outer array
for (let i = 0; i < arr.length; i++) {
  // inner loop applies to sub-arrays
  const innerArrLen = arr[i].length
  for (let j = 0; j < innerArrLen; j++) {
    // accesses each element of each sub-array in turn
    console.log(arr[i][j])
  }
}
