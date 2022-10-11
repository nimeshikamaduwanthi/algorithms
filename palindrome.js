// Check given string is a palindrome
const isPalindrome = (str) => {
  const strArr = str.split("");
  const strReverce = strArr.reverse().join("");

  return str === strReverce;
};

const result = isPalindrome("madam1");
console.log(result);
