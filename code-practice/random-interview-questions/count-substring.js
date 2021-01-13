/*
Count the occurrences of a substring in a given string
*/

// Solution

const countSubstring = (string, searchValue) => {
  let count = 0;
  let i = 0;

  while (true) {
    const search = string.indexOf(searchValue, i);
    if (search !== -1) [count, i] = [count + 1, search + 1];
    else return count;
  }
};

console.log(countSubstring('run baby runbaby baby run baby run', 'run'));
console.log(
  countSubstring(
    'batman told me to take cover, when he went and rescued me',
    'me',
  ),
);
