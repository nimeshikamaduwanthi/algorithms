// Remove all the vowel letters and return it.
const removeVowels = (str) => {
  const letterArray = str.split("");

  const vowels = ["a", "e", "i", "o", "u"];

  const letterArraWithoutVowels = [];

  for (let i = 0; i < letterArray.length; i++) {
    if (!letterArray[i].includes(vowels)) {
      letterArraWithoutVowels.push(letterArray[i]);
    }
  }
  return letterArraWithoutVowels.join("");
};

const str = "nimeshikamaduwanthi";

const results = removeVowels(str);

console.log(results);
