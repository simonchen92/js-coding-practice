/*
Reverse a singly linked list

Example
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

// Test Cases

const list = [1, 2, 3, 4, 5];
const list1 = [33, 45, 67, 78, 89, 90];

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Solution
// Iterative
const reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr !== null) {
    // save next
    next = curr.next;
    // reverse
    curr.next = prev;
    // advance prev and curr
    prev = curr;
    curr = next;
  }
  return prev;
};

console.log(reverseList(list));
console.log(reverseList(list1));

// Solution
// Recursion

var reverseList2 = function (head) {
  // base case
  if (head == null || head.next == null) {
    return head;
  }
  // go all the way to the end
  let reversedListHead = reverseList(head.next);
  // add reverse myself
  head.next.next = head;
  head.next = null;
  // go up
  return reversedListHead;
};

console.log(reverseList2(list));
console.log(reverseList2(list1));
