// return two arrays which are less than and higher than the given number
const displayLessAndHigherNum = (numArr, num) => {
  const higherThanNum = [];
  const lessThanNum = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > num) {
      higherThanNum.push(numArr[i]);
    } else {
      lessThanNum.push(numArr[i]);
    }
  }
  return { higherThanNum, lessThanNum };
};

const numArr = [2, 4, 7, 9, 3, 1, 8, 6, 10, 0];

const { higherThanNum, lessThanNum } = displayLessAndHigherNum(numArr, 5);
console.log(higherThanNum);
console.log(lessThanNum);

// create a function named displayLessAndHigherNum and pass 2 argumnet as numArr and num
// create 2 empty array named higherThanNum and lessThanNum inside the fuction
// create a for loop get indexes of numArr
// in for loop to give a conditon if numArr elements higher than num push numArr to higherThanNum array
// else push numArr to lessThanNum array
// return both of arrays as an object after the loop

// when call the  fuction we can destructure arrays and call it.
