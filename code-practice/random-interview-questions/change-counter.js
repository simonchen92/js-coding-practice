// Please create change with the smallest number of coins (i.e. quarter, dimes, nickel, pennies)

// Solution 1
// Most easy way to doing it using while loops

const generateCoinChange = cents => {
  let quarter = 0
  let dimes = 0
  let nickel = 0
  let pennies = 0
  let remainingChange = cents

  while (remainingChange >= 25) {
    remainingChange -= 25
    quarter++
  }
  while (remainingChange >= 10) {
    remainingChange -= 10
    dimes++
  }
  while (remainingChange >= 5) {
    remainingChange -= 5
    nickel++
  }
  while (remainingChange >= 1) {
    remainingChange -= 1
    pennies++
  }
  console.log(`Quarters: ${quarter}, Dimes: ${dimes}, Nickels: ${nickel}, Pennies: ${pennies}`)
}

generateCoinChange(97)
generateCoinChange(103)
generateCoinChange(45)

// Solution 2
// Simplifcation of the above using function to determine number of coins

const generateCoinChange1 = cents => {
  let quarter = 0
  let dimes = 0
  let nickel = 0
  let pennies = 0
  let remainingChange = cents

  const getNumberOfCoins = coinValue => {
    const numberOfCoins = Math.floor(remainingChange / coinValue)
    remainingChange = remainingChange - (numberOfCoins * coinValue)
    return numberOfCoins
  }

  quarter = getNumberOfCoins(25)
  dimes = getNumberOfCoins(10)
  nickel = getNumberOfCoins(5)
  pennies = getNumberOfCoins(1)

  console.log(`Quarters: ${quarter}, Dimes: ${dimes}, Nickels: ${nickel}, Pennies: ${pennies}`)
}

generateCoinChange1(94)
generateCoinChange1(58)
generateCoinChange1(23)

// Solution 3
// Using denomination to log counts and for loop to loop through

const generateCoinChange2 = cents => {
  const counts = [0, 0, 0, 0, cents]
  const denomination = [25, 10, 5, 1]
  for (let i = 0; i < 4; i++) {
    counts[i] = Math.floor(counts[4] / denomination[i])
    counts[4] -= counts[i] * denomination[i]
  }
  console.log(`Quarters: ${counts[0]}, Dimes: ${counts[1]}, Nickels: ${counts[2]}, Pennies: ${counts[3]}`)
}

generateCoinChange2(23)
generateCoinChange2(97)
generateCoinChange2(135)
generateCoinChange2(83)
