/*
You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided.


Example 1:
Input: n = 7
Output: 6

Explanation: Details of the tournament: 
- 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 3 + 2 + 1 = 6.

Example 2:
Input: n = 14
Output: 13

Explanation: Details of the tournament:
- 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
- 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
- 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 7 + 3 + 2 + 1 = 13.
 

Constraints:
1 <= n <= 200

Direct Link
https://leetcode.com/problems/count-of-matches-in-tournament/submissions/
*/

// Solution 1
// Brute Force - Easy to read
const numberOfMatches = function (n) {
  let matches = 0;
  let current = n;

  while (current > 1) {
    if (current % 2 === 0) {
      matches += current / 2;
      current = current / 2;
    } else {
      matches += (current - 1) / 2;
      current = (current - 1) / 2 + 1;
    }
  }
  return matches;
};

// console.log(numberOfMatches(7)); // 6
// console.log(numberOfMatches(14)); // 13

// Solution 2
// Recursion

const numberOfMatches1 = function (n, matches = 0) {
  let numberOfTeams = n;
  let isEven = (n) => n % 2 === 0;

  // Edge case if number of team is 1
  if (numberOfTeams === 1) return matches;

  matches += isEven(numberOfTeams)
    ? numberOfTeams / 2
    : (numberOfTeams - 1) / 2;

  numberOfTeams = isEven(numberOfTeams)
    ? numberOfTeams / 2
    : (numberOfTeams - 1) / 2 + 1;

  return numberOfMatches1(numberOfTeams, matches);
};

console.log(numberOfMatches1(7)); // 6
console.log(numberOfMatches1(14)); // 13
