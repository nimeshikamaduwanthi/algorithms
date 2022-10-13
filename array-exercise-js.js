//01.join all elements of the following array into a string
const myColors = ["Red", "Green", "White", "Black"];
const myColorsStr = myColors.toString("");
console.log(myColorsStr);
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

console.log(res);
