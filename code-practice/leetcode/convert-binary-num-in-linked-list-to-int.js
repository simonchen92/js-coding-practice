/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. 
The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.

 

Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0

Example 3:
Input: head = [1]
Output: 1

Example 4:
Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880

Example 5:
Input: head = [0,0]
Output: 0
 

Constraints:
The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.

Direct Link
https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
*/

// Solution

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const getDecimalValue = function (head) {
  // Set default total value as 0
  let total = 0;
  // While there is a head node
  while (head) {
    // Double the value of total and sum it up with the value of the head node.
    for (let i = 0; i < head.length; i++) {
      total = total * 2 + head[i];
    }
    // Set the head node pointer to look at the next node.
    head = head.next;
  }
  return total;
};

console.log(getDecimalValue([1, 0, 1])); // 5
console.log(getDecimalValue([0])); // 0
console.log(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])); // 18880
