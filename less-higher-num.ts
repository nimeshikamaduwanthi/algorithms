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
