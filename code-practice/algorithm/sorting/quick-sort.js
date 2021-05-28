/*
Sort an array using the quick sort algorithm

Quicksort is a divide and conquer algorithm. 
Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. 
Quicksort can then recursively sort the sub-arrays
*/

const quickSort = (arr, start, end) => {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  // PivotIndex keeps track of the 'middle' position of the element
  // Where all value to the left are less and value to the right are more than the pivot value
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
};

function quickSortRecursive(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = quickSort(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);
}

const array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortRecursive(array, 0, array.length - 1);
console.log('array after recursive quick sort: ', array);

function quickSortIterative(arr) {
  // Create an empty stack to use push() and pop() function
  stack = [];

  // Adding the entire initial array as an "unsorted subarray"
  stack.push(0);
  stack.push(arr.length - 1);

  // Check top of stack and keep looping until we are done with sorting subarrays
  while (stack[stack.length - 1] >= 0) {
    // Extracting the top unsorted subarrays
    end = stack.pop();
    start = stack.pop();

    pivotIndex = quickSort(arr, start, end);

    // If there are unsorted elements to the "left" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    // If there are unsorted elements to the "right" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
}

const array1 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortIterative(array1);
console.log('after iterative quick sort: ', array1);
