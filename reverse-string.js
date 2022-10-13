const reverseWord = (text) => {
  strArr = text.split(" ");
  reverseWordArr = [];
  //   strReverce = strArr.reverse().join("");
  for (let i = 0; i < strArr.length; i++) {
    wordArr = strArr[i].split("");
    wordReverse = wordArr.reverse().join("");

    reverseWordArr.push(wordReverse);
  }

  return reverseWordArr.join(" ");
};

const text = "typescript is better than javascript";

const results = reverseWord(text);
console.log(results);
