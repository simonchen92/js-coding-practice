// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// Direct Link to Leetcode Challenge
// https://leetcode.com/problems/permutations/

// Solution 1 using Higher Order Find method
// Faster solution for simpler problems

function permute (nums) {
  const results = []

  function find (curr, rest) {
    if (!rest.length) {
      return results.push(curr)
    }

    for (let i = 0; i < rest.length; i++) {
      find(
        [...curr, rest[i]],
        [...rest.slice(0, i), ...rest.slice(i + 1)]
      )
    }
  }

  find([], nums)

  return results
}

console.log(permute([1, 2, 3]))

// Solution 2 using recursion
// Slower time complexity for easier problems but faster when more complex

const permute1 = function (nums) {
  const results = []

  const permutations = (current, remaining) => {
    if (remaining.length <= 0) {
      results.push(current.slice())
    } else {
      // Loop through remaining elements
      for (let i = 0; i < remaining.length; i++) {
        // Insert the iTH element onto the end of current
        current.push(remaining[i])
        // Recurse with inserted element removed
        permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i + 1)))
        // Remove last inserted element for next iteration
        current.pop()
      }
    }
  }

  permutations([], nums)
  return results
}

console.log(permute1([1, 2, 3]))
