// How to create private variable in JavaScript

// Create a local scope
function secretVariable () {
  const secret = 'super secret code'
  return function () {
    return secret
  }
}

// Call local scope and return it as a function
const getSecretVariable = secretVariable()

console.log(getSecretVariable())
