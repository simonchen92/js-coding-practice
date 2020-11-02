// task:
// change the `this` context with
// bind/call/apply with the function so that it returns 10
// add(5) -> should return 10

function add (x) {
  return this + x
}

console.log(add.call(5, 5))
console.log(add.bind(5, 5)())
console.log(add.apply(5, [5]))
