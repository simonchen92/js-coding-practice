/*
 * Complete the 'optimalPoint' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY magic
 *  2. INTEGER_ARRAY dist
 *
 * Exactly like Gas Station problem in LeetCode
 *
 * Direct Link
 * https://leetcode.com/problems/gas-station/
 */

function optimalPoint(magic, dist) {
  let start = 0;
  let pos = 0;

  let magicTotal = magic.reduce((a, b) => a + b);
  let distTotal = dist.reduce((a, b) => a + b);

  if (magicTotal < distTotal) return -1;

  for (let i = 0; i < dist.length; i++) {
    pos += magic[i] - dist[i];
    if (pos < 0) {
      start = i + 1;
      pos = 0;
    }
  }
  return start;
}

console.log(optimalPoint([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
