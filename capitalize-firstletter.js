const text = "typescript is better than javascript";

const capitalizeFirstletter = (text) => {
  strArr = text.split(" ");

  const res = strArr.map((str) => {
    return str[0].toUpperCase() + str.slice(1);
  });

  return res.join(" ");
};

const result = capitalizeFirstletter(text);
console.log(result);
