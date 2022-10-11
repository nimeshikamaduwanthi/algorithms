// Remove all the vowel letters and return it.
const removeVowels = (str) => {
  const letterArray = str.split("");

  const vowels = ["a", "e", "i", "o", "u"];

  let letterArraWithoutVowels = [];

  for (let i = 0; i < letterArray.length; i++) {
    if (!vowels.includes(letterArray[i])) {
      letterArraWithoutVowels.push(letterArray[i]);
    }
  }
  return letterArraWithoutVowels.join("");
};

const str = "nimeshika maduwanthi";

const results = removeVowels(str);

console.log(results);
