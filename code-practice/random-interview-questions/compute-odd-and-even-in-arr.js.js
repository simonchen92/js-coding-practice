/*
Given an array of integers, get the product of the integers and if the product of the numbers are even then get the sum of it, otherwise return 0 if odd.
*/

const compute = (arr) => {
    // first find the product of the number
    let productNum = arr.reduce((acc, curr) => acc * curr);
    // if product of the num are even, then get the sum of them
    if (productNum % 2 === 0) {
        return arr.reduce((acc, curr) => acc + curr);
    }
    // if product of num are odd, return 0
    if (productNum % 2 === 1) {
        return 0;
    }
};

console.log(compute([1,2,3,4,5])); // 15
console.log(compute([3,7,9])); // 0
