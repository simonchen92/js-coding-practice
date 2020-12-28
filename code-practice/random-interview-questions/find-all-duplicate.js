// write a function that takes in an array of numbers
// returns an array of numbers that appears more than once

const findDupes = (num) => {
  // loop an array of numbers
  // filter out numbers and send back numbers that occur more than once
  const filteredArr = num.filter((item, index) => {
    return num.indexOf(item) !== index;
  });

  console.log('filtered arr is ', filteredArr);
  // since the returned value are all numbers that occur more than once
  // return the numbers values that occured more than once, ONLY ONCE
  return filteredArr.filter((item, index) => {
    return filteredArr.indexOf(item) === index;
  });
};

console.log(findDupes([1, 2, 2, 3, 3, 4, 5]));
console.log(findDupes([5, 3, 2, 3, 6, 5, 8]));
console.log(findDupes([5, 3, 2, 3, 6, 5, 8, 6, 5, 5]));
