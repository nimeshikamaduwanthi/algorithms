//01.List the properties of a JavaScript object.
const user = {
  userid: 3214,
  name: "nimeshika maduwanthi",
  age: 29,
};
let properties = Object.keys(user);
// console.log(properties.join(" "));

//02.delete the rollno age from the above object.
delete user.age;
// console.log(user);

//03.get the length of a JavaScript object
const lengthOfUser = properties.length;
// console.log(lengthOfUser);

//04.display the reading status of the following books.
const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const books = library.map((book) => {
  return book.author + "-" + book.title + ":" + book.readingStatus;
});

console.log(books);
