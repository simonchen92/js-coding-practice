/*
Write a function called generateRange that will take three integers, min, max, and step as input.

Using those three integer inputs, generate a range of integers from min to max but after each certain number of steps. 
The function will output these numbers in an array. The range output, depending on the step count, does not have to include the max. 

Let’s look at an example:

let min = 2;
let max = 12;
let step = 3;

For our example above we count from 2 to 12 but if we count every third number after 2, we get the following numbers:

2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

The function will output: [2, 5, 8, 11].
*/

// Solution

function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

console.log(generateRange(2, 12, 3));
