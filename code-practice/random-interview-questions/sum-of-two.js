/*
You have two integer arrays, a and b, and an interger target value v.
Determine whether there is a pair of numbers, where on number is taken from a and the other from b,
that can be added together to get a sum of b.
Return true if such a pair exists, otherwise return false.

Example 1:
a = [1, 2, 3]
b = [10, 20, 30, 40]
v = 42

Return true because 40 (b) + 2 (a) = 42

Example 2:
a = [0, 0, -5, 30212]
b = [-10, 40, -3, 9]
v = -8

Return true because -5 (a) + -3 (b) = -8
*/

// Solution

const sumOfTwo = (a, b, v) => {
    // Create new hash / obj to store difference in values
    let obj = new Set();
    for (let i = 0; i < a.length; i++) {
        // Calculate the values we need from the second array be getting the difference of value and array a  
        let differences = v - a[i];
        // Store that value into the hash / obj
        obj.add(differences);
    }

    for (let i = 0; i < b.length; i++) {
        // if the second array has the value in the obj, then return true
        if (obj.has(b[i])) {
            return true;
        }
    }

    return false;
};

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42)); // true
console.log(sumOfTwo([0, 0, -5, 30212], [-10, 40, -3, 9], -8)); // true
