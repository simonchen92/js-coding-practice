/*
Given two strings, compare if the strings contain the same letters
Return true if it is, return false otherwise
*/

const stringRotation = (string1, string2) => {
    if (string1.length !== string2.length) return false;
    return (string2 + string2).includes(string1);
};

console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);