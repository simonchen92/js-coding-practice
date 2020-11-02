// Let's pretend we set up an input as shown below

// {/* <div id="app">
//   <h1>Hello World</h1>
//   <input type="">
// </div> */}

// Setup Debounce
// Debounce is where console doesn't log every keystroke

const input = document.querySelector('input')

const debounce = (func, timer) => {
  let timerId = null
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      func(...args)
    }, timer)
  }
}

input.addEventListener('keyup', debounce((e) => {
  console.log(input.value)
}, 1000))
