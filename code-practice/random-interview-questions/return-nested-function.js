/*
Return a nested function call that will either produce a string or sum of num
*/

const nestedFunction = (a) => (b) => a + b;

console.log(nestedFunction("Harry")("Potter")); // HarryPotter
console.log(nestedFunction(5)(10)); // 16
