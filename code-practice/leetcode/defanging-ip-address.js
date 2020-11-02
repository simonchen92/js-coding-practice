/**
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

Constraints:
The given address is a valid IPv4 address.

Direct Link
https://leetcode.com/problems/defanging-an-ip-address/

 */

// Solution 1
// One-liner using built in functionality

let defangIPaddr = function (address) {
  return address.split('.').join('[.]');
};

console.log('=== Solution 1 ===');
console.log(defangIPaddr('1.1.1.1'));
console.log(defangIPaddr('255.100.50.0'));

// Solution 2 using RegEx

let defangIPaddr1 = function (address) {
  return address.replace(/\./g, '[.]');
};

console.log('=== Solution 2 ===');
console.log(defangIPaddr1('1.1.1.1'));
console.log(defangIPaddr1('255.100.50.0'));

// Solution 3
// Using traditional for loop

let defangIPaddr2 = function (address) {
  let defang = '';
  for (let i = 0; i < address.length; i++) {
    if (address[i] !== '.') {
      defang += address[i];
    } else {
      defang += '[.]';
    }
  }
  return defang;
};

console.log('=== Solution 3 ===');
console.log(defangIPaddr2('1.1.1.1'));
console.log(defangIPaddr2('255.100.50.0'));
