// Check given string is a palindrome
const isPalindrome = (str) => {
  const strArr = str.split("");
  const strReverce = strArr.reverse().join("");

  return str === strReverce;
};

const result = isPalindrome("madam1");
console.log(result);

// create a fuction named isPalindrome and pass the string as an argumnet
// inside the function string split and make string array named  strArr
// the strArr revecrse and join make reverse string named strReverce
// return result if str equl to strReverce
