const text = "typescript is better than javascript";

const replaceStars = (text) => {
  let removeAndReplacestr = text.split(" ").join("*");
  return removeAndReplacestr;
};

const result = replaceStars(text);
console.log(result);
