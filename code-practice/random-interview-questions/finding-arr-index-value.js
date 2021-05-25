/*
Find all the indexes of values in the array
If there are no values found, return empty arr
*/

const findArrIndexValue = (arr, value) => {
  return arr.reduce((acc, curr, i) => {
    return curr === value ? [...acc, i] : acc;
  }, []);
};

console.log(findArrIndexValue([1, 2, 4, 5, 2, 7, 2], 2)); // [1,4,6]
console.log(findArrIndexValue([2, 3, 6, 7, 9, 6], 8)); // []
