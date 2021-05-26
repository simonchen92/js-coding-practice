/*
Return the duplicate values that exists from the two arrays filtering out the duplicated values
*/

const dupeValues = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter((num) => s.has(num));
};

console.log(dupeValues([1, 2, 3], [4, 3, 2]));
console.log(dupeValues([1, 2, 3, 2], [2, 4, 3, 2]));
