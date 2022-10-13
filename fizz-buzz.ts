const fizzBuzz = (number) => {
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(50);

// created a function named fizzBuzz and pass a argument as a number
// in the for loop get indexes of less than numbers
// give the condition if index divided by 3 equl to 0 and index divided by 5 equl to 0 return fizzbuzz
// else if index divided by 3 equl to 0 return fizz
// else if index divided by 5 equl to 0 return buzz and else return index
