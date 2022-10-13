const removeDuplicate = (numbers) => {
  uniqNum = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!uniqNum.includes(numbers[i])) {
      uniqNum.push(numbers[i]);
    }
  }
  return uniqNum;
};

const numbers = [
  1, 4, 2, 3, 6, 3, 7, 4, 8, 4, 6, 6, 5, 7, 10, 0, 0, 0, 9, 2, 0,
];
const results = removeDuplicate(numbers);
console.log(results);

// created a function named removeDuplicate. passed an array as an argument named numbers.
// created an empty array named uniqNum in the function
// Inside the function wrote a for loop to get indexes of the numbers array
// In for loop gave the condition if new uniqNum array not included numbers arry elements , push that element to uniqNum arry
// return uniqNum array after the for loop
