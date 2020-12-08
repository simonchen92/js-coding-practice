/*
On a plane there are n points with integer coordinates points[i] = [xi, yi]. 
Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:
In one second always you can either move vertically, horizontally by one unit or 
diagonally (it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array.
 

Example 1:
Input: points = [[1,1],[3,4],[-1,0]]
Output: 7

Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds

Example 2:
Input: points = [[3,2],[-2,2]]
Output: 5

Constraints:
points.length == n
1 <= n <= 100
points[i].length == 2
-1000 <= points[i][0], points[i][1] <= 1000

Direct Link
https://leetcode.com/problems/minimum-time-visiting-all-points/
*/

// Solution

var minTimeToVisitAllPoints = function (points) {
  let time = 0;
  if (points.length < 2) return 0;

  for (let i = 1; i < points.length; i++) {
    // Calculate the distances between current point and previous point for each axis
    const x = Math.abs(points[i - 1][0] - points[i][0]);
    const y = Math.abs(points[i - 1][1] - points[i][1]);

    // For each distance the time will be the max value between X and Y
    // So we can get the total time plus the max value of each distance
    time += Math.max(x, y);
  }
  return time;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ]),
); // 7
console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ]),
); // 5
