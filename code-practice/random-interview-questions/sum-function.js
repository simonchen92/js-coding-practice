// Create a sum function that adds two numbers together
// Please feel return back a string or number

// Solution 1
// Only works for smaller numbers

function sum (a, b) {
  return (Number(a) + Number(b)).toString()
}

console.log(sum('123', '456'))
console.log(sum('999999999999999999999999999', '1'))

// Solution 2

function sum1 (a, b) {
  let result = ''
  let carrying = false
  while (a.length || b.length) {
    // Pass the last character into the string or 0 if no length
    // If number is greater than or equal 10 than add 1 onto the next number
    const num = parseInt(a.substring(a.length - 1) || 0) + parseInt(b.substring(b.length - 1) || 0) + carrying
    carrying = (num >= 10)
    // If two digit number then we want our number to be the second number or return that number if not two digit number
    // Return result which is the number at the end (result is the end number on the right of string)
    result = `${num.toString().split('')[1] || num}${result}`
    // Remove last character in the string of Number
    a = a.slice(0, -1)
    b = b.slice(0, -1)
  }
  // Return results; If we are carrying add a 1 followed by result otherwise just return the result
  return carrying ? `1${result}` : result
}

console.log(sum1('123', '456'))
console.log(sum1('9999', '1'))
console.log(sum1('567', '897'))
console.log(sum1('999999999999999999999999999', '1'))
