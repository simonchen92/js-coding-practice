/*
Days of the week are represented as three-letter strings (“Mon”, “Tue”, “Wed”. “Thu”, “Fri”, “Sat”. “Sun”).
Write a function solution that, given a string S representing the day of the week and an integer K (between 0 and 500, inclusive), 
returns the day of the week that is K days later.

For example, given S = “Wed” and K = 2, the function should return “Fri”.
Given S = “Sat” and K = 23, the function should return “Mon”.
*/

// Solution
function solution(S, K) {
  let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // get index for the day of the week
  let dayIndex = daysOfWeek.indexOf(S);

  // Add K to dayIndex and check to see if its divisible by 7 (days of week)
  // If not the remainder will be the day of the week
  let result = (dayIndex + K) % daysOfWeek.length;

  return daysOfWeek[result];
}

console.log(solution('Wed', 2)); // 'Fri'
console.log(solution('Sat', 23)); // 'Mon'
