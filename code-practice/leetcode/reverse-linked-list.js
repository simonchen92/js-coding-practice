// Reverse a singly linked list.

// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

// Direct Link to LeetCode Problem
// https://leetcode.com/problems/reverse-linked-list/

// Test Case

const list = [1, 2, 3, 4, 5]
const list1 = [33, 45, 67, 78, 89, 90]

// Solution

const reverseList = function (head) {
  // if list has one element or nothing at all to reverse then return itself
  if (!head || !(head.next)) {
    return head
  }
  // reverse list except the first element
  const reversedHead = reverseList(head.next)
  // access last element in the reverse list
  const newLastElement = head.next
  // If the last element exists, connect it to the first element
  if (newLastElement) {
    newLastElement.next = head
  }
  // Blocking the unnecessary access of the previous head
  head.next = null
  // Return the new head
  return reversedHead
}

console.log(reverseList(list))
console.log(reverseList(list1))
