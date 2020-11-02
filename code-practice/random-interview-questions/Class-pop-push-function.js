// build a stack class that implements these methods

// class Stack {}
// const myStack = new Stack() // []
// myStack.push(5) // [5]
// myStack.push(5) // [5, 5]
// myStack.push(5) // [5, 5, 5]
// myStack.pop() // [5, 5]
// myStack.pop() // [5]
// myStack.pop() // []
// myStack.pop() // Error

class Stack {
  constructor (arr) {
    this.arr = []
  }

  pop () {
    this.arr.pop()
    return this.arr
  }

  push (item) {
    this.arr.push(item)
    return this.arr
  }
}

const myStack = new Stack() // []
myStack.push(5) // [5]
console.log(myStack)
myStack.push(5) // [5, 5]
console.log(myStack)
myStack.push(5) // [5, 5, 5]
console.log(myStack)
myStack.pop() // [5, 5]
console.log(myStack)
myStack.pop() // [5]
console.log(myStack)
myStack.pop() // []
console.log(myStack)
myStack.pop() // Error
console.log(myStack)
