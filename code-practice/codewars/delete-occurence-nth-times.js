/*
Code War Kata: Delete occurrences of an element if it occurs more than n times

Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.
For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times,
and then take 3, which leads to [1,2,3,1,2,3].

Direct Link
https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

*/

// Solution
function deleteNth (arr, n) {
  const newArr = []
  return arr.filter(num => {
    newArr[num] = (newArr[num] || 0) + 1
    return newArr[num] <= n
  })
}

console.log(deleteNth([20, 37, 20, 21], 1)) // [ 20, 37, 21 ]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)) // [1, 1, 3, 3, 7, 2, 2, 2]
