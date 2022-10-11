const users = [
  { id: 1, name: "John Doe", age: 23, occupation: "Doctor" },
  { id: 2, name: "Chris Evans", age: 27, occupation: "Software Engineer" },
  { id: 3, name: "Stan Lee", age: 30, occupation: "Software Engineer" },
  { id: 4, name: "Cobie Smulders", age: 22, occupation: "Software Engineer" },
  { id: 5, name: "Tom Hiddleston", age: 26, occupation: "Actor" },
  { id: 6, name: "Jenny Agutter", age: 27, occupation: "lowyer" },
];

const higherAge = users.filter((user) => user.age > 25);
// console.log(higherAge);

const softwareEngineers = users.filter(
  (user) => user.occupation === "Software Engineer"
);
// console.log(softwareEngineers);

const higherAgeSoftwareEngineers = users.filter(
  (user) => user.age > 25 && user.occupation === "Software Engineer"
);
// console.log(higherAgeSoftwareEngineers);

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const email = "shashika@gmail.com";

const isValidEmail = EMAIL_REGEX.test(email);
console.log(isValidEmail);
