//01. find the first not repeated character

const findNotRepeatedLttr = (str) => {
  strArry = str.split("");
  const letterMap = {};
  const nonRepeatedLetters = [];

  strArry.map((lttr) => {
    if (!letterMap.hasOwnProperty(lttr)) {
      letterMap[lttr] = 1;
    } else {
      letterMap[lttr] = letterMap[lttr] + 1;
    }
  });

  const person = {
    name: "hi",
  };

  for (const letter in letterMap) {
    if (letterMap[letter] === 1) {
      nonRepeatedLetters.push(letter);
    }
  }

  return nonRepeatedLetters;
};

const result = findNotRepeatedLttr("aabbcdefgfehsv");
console.log(result);
