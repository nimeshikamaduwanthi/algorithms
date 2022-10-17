//01.join all elements of the following array into a string
const myColors = ["Red", "Green", "White", "Black"];
const myColorsStr = myColors.toString("");

const myColorsPlus = myColors.join("+");
// console.log(myColorsPlus);

//02.first letter lower case
const string = "The Quick Brown Fox";
const strArry = string.split(" ");

const res = strArry.map((str) => {
  return (
    str[0].toLowerCase() +
    str.slice(1, str.length - 1) +
    str[str.length - 1].toUpperCase()
  );
});

// console.log(res);

//03.display the colors
const colors = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];
const positions = ["th", "st", "nd", "rd"];

const displayColors = () => {
  colors.map((color, index) => {
    if (index === 0) {
      console.log(`${index + 1}${positions[1]} choice is ${color}`);
    } else if (index === 1) {
      console.log(`${index + 1}${positions[2]} choice is ${color}`);
    } else if (index === 2) {
      console.log(`${index + 1}${positions[3]} choice is ${color}`);
    } else {
      console.log(`${index + 1}${positions[0]} choice is ${color}`);
    }
  });
};

// displayColors();

//04.extract unique characters
const extractUniqLttrs = (str) => {
  const strArr = str.split("");
  const uniqLttrs = [];
  strArr.map((lttr) => {
    if (!uniqLttrs.includes(lttr)) {
      uniqLttrs.push(lttr);
    }
  });
  return uniqLttrs.join("");
};

const str = "thequickbrownfoxjumpsoverthelazydog";
// const results = extractUniqLttrs(str);
// console.log(results);

//05.convert an amount to coins
const amountTocoins = (amount, coins) => {};

const amount = 46;
const coins = [10, 5, 2, 1];
// const results = amountTocoins(amount, coins);
// console.log(results);

//06.generate an array between two integers of 1 step length.
const displayBetweenInt = (start, end) => {
  const betweenNumArr = [];
  for (i = start; i <= end; i++) {
    betweenNumArr.push(i);
  }
  return betweenNumArr;
};

// const results = displayBetweenInt(-6, 6);
// console.log(results);

//07.find the unique elements from two arrays
const findEqualNum = (first, second) => {
  const equalNumArr = [];
  first.map((num) => {
    if (second.includes(num)) {
      equalNumArr.push(num);
    }
  });
  return equalNumArr;
};

const firstArr = [1, 2, 3];
const secondArr = [100, 2, 1, 10];

// const results = findEqualNum(firstArr, secondArr);
// console.log(results);

//08.find the  longest word within the string

const findLongestWord = (sentence) => {
  const wordArray = sentence.split(" ");
  let largestWord = wordArray[0];

  wordArray.map((word) => {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  });

  return largestWord;
};

// const sentence = "Web Development Tutorial";
// const largest = findLongestWord(sentence);
// console.log(largest);

const numArr = [12, 34, 56, 1];
let largestNum = numArr[0];

numArr.map((num) => {
  if (num > largestNum) {
    largestNum = num;
  }
});
console.log(largestNum);
