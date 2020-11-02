// write a function that takes in a number and returns first x number of prime numbers

// write function that in a number of prime numbers
// create an empty arr to host prime numbers
// loop through all numbers
// find prime numbers through helper function
// return x prime numbers

const findPrimeNums = num => {
  const primeNum = []
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primeNum.push(i)
    }
  }
  return primeNum
}

const isPrime = num => {
  const squareNum = Math.sqrt(num)
  for (let i = 2; i <= squareNum; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num
}

console.log(findPrimeNums(2))
console.log(findPrimeNums(3))
console.log(findPrimeNums(5))
console.log(findPrimeNums(15))
console.log(findPrimeNums(25))
console.log(findPrimeNums(40))
console.log(findPrimeNums(67))
console.log(findPrimeNums(100))
