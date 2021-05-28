/*
Sort an array using the merge sort algorithm

Merge sort is an efficient, general-purpose, comparison-based sorting algorithm.

1. If length of array is less than 2, return the array
2. Use Math.floor to calculate the middle point of the array
3. Use slice method to slice the array into two and use recursion to create subarrays
4. Use Array.from and array shift method to combine two subarrays into one
*/

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle, arr.length));
  return Array.from({ length: left.length + right.length }, () => {
    if (!left.length) return right.shift();
    else if (!right.length) return left.shift();
    else return left[0] > right[0] ? right.shift() : left.shift();
  });
};

console.log(mergeSort([5, 1, 4, 3, 2]));
console.log(mergeSort([10, 3, 5, 7, 1, 9, 4]));
console.log(mergeSort([6, 4]));
