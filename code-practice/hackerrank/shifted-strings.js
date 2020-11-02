/**
On Hackerrank we have function that takes in 3 arguments. Example --> function shiftStrings("string", leftShifts, rightShifts); LeftShifts and rightShifts being integers.

Left Shift: A single circular rotation of the string in which the first character becomes the last character and all other characters are shifted one index to the left. For example, abcde becomes bcdea after one left shift and cdeab after two left shifts.

Right Shift: A single circular rotation of the string in which the last character becomes the first character and all other characters are shifted to the right. For example, abcde becomes eabcd after one right shift and deabc after two right shifts.

Complete the 'getShiftedString' function below.
 
  The function is expected to return a STRING.
  The function accepts following parameters:
   1. STRING s
   2. INTEGER leftShifts
   3. INTEGER rightShifts

 */

function getShiftedString(s, leftShifts, rightShifts) {
  const arr = [...s];
  const totalShift = (leftShifts - rightShifts) % arr.length;
  return [...arr.slice(totalShift), ...arr.slice(0, totalShift)].join('');
}

console.log(getShiftedString('123456789', 1, 5));
console.log(getShiftedString('abcdef', 0, 3));
console.log(getShiftedString('jokeknaf', 4, 0));
