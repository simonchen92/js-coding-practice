/*
Write a function where if user puts an input 5 it prints:

1
22
333
4444
55555

*/

// Solution

const printNum = num => {
  for (let i = 1; i <= num; i++) {
    console.log(makeStr(i))
  }
}

const makeStr = num => {
  let str = ''
  for (let i = 0; i < num; i++) {
    str += num
  }
  return str
}

printNum(5)
