// Task 1
const userArr = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
const accArr = [];
userArr.forEach((element) => {
  accArr.push(element.age);
});

const isSmalletsNumber = (element) => element === Math.min(...accArr); /*21*/
const smallestAgeIndex = userArr[accArr.findIndex(isSmalletsNumber)]; /*1*/
const youngestPerson = smallestAgeIndex.name; /*Lasha*/
console.log(youngestPerson); /*Lasha*/


// Task 2
const user1 = {
  name: "Misha",
  lastname: "Rekhvishvili",
};
const copyCat = function (user) {
  const newUser = { ...user };
  return newUser;
};
const copiedUser = copyCat(user1);
console.log(copiedUser);
// {name: 'Misha', lastname: 'Rekhvishvili'}
