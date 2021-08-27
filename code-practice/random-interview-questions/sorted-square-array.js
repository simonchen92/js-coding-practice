/*
You have a sorted array of integers. Write a function that returns a sorted array containing the squares of those integers

Input array length 1 <= N <= 10000
Element -10000 <= array[i] <= 10000

Input array will be sorted
Output array must be sorted

Example 1:
array = [-7, -3, -1, 4, 8, 12] => [1, 9, 16, 49, 64, 144]

Example 2:
array = [1, 2, 3] => [1, 4, 9]

Example 3:
array = [-3, -2, -1] => [1, 4, 9]

Example 4:
array = [] => [0]
*/

const sortedSquaredArray = array => {
    // Create a result array that takes in the same number of inputs as the array length
    let result = [array.length];
    // Create two pointers - one from the left starting at index 0 and one from the right at starting at the end of array
    let left = 0;
    let right = array.length - 1;

    // Create a for loop that loops throught the array starting from the end
    for (let i = array.length - 1; i >= 0; i--) {
        // Since the sorted array may contain negative nums, we take the absolute value of that and compare it to the value from the right
        if (Math.abs(array[left]) > array[right]) {
            // If value of the left pointer is greater than the right - we get the squared value of it and increment left pointer value by 1
            result[i] = array[left] * array[left];
            left++;
        } else {
            // If the left pointer value isnt greater than the right then we square the value of the the right value and decrease right pointer by -1
            result[i] = array[right] * array[right];
            right--;
        }
    }
    return result;
};

console.log(sortedSquaredArray([-7, -3, -1, 4, 8, 12])); // [1, 9, 16, 49, 64, 144]
console.log(sortedSquaredArray([1, 2, 3])); // [1, 4, 9]
console.log(sortedSquaredArray([-3, -2, -1])); // [1, 4, 9]
console.log(sortedSquaredArray([])); // [0]