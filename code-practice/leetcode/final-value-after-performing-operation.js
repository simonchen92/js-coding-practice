/*
There is a programming language with only four operations and one variable X:
++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.

Initially, the value of X is 0.
Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

Example 1:
Input: operations = ["--X","X++","X++"]
Output: 1

Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.

Example 2:
Input: operations = ["++X","++X","X++"]
Output: 3

Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.

Example 3:
Input: operations = ["X++","++X","--X","X--"]
Output: 0

Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.
 

Constraints:
1 <= operations.length <= 100
operations[i] will be either "++X", "X++", "--X", or "X--".

Direct Link
https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
*/

// Solution

const finalValueAfterOperations = function(operations) {
  let value = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "X++" || operations[i] === "++X") {
      value++;
    }

    if (operations[i] === "X--" || operations[i] === "--X") {
      value--;
    }
  }

  return value;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // 3
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); // 0

// Clever Solution
// Using reduce

/*
Using a ternary operator return a boolean for the value of curr[1] === "+". This value can only be '+' or '-' as the 4 possible operations are
    X[+]+
    +[+]X
    X[-]-
    -[-]X
If true, add 1 to 'acc' using 'acc++'. If false subtract 1 from 'acc' using 'acc--'.
*/

const finalValueAfterOperations1 = function(operations) {
  return operations.reduce((acc, curr) => (curr[1] === "+" ? ++acc : --acc), 0);
};

console.log(finalValueAfterOperations1(["--X", "X++", "X++"])); // 1
console.log(finalValueAfterOperations1(["++X", "++X", "X++"])); // 3
console.log(finalValueAfterOperations1(["X++", "++X", "--X", "X--"])); // 0
