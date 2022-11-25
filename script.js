// Task 1
const userArr = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
const accArr = [];
// Creates array of ages
userArr.forEach((element) => {
  accArr.push(element.age);
});
// Finding smallest age and it's index in accArr
const isSmalletsNumber = (element) => element === Math.min(...accArr); /*21*/
const smallestAgeIndex = userArr[accArr.findIndex(isSmalletsNumber)]; /*1*/
const youngestPerson = smallestAgeIndex.name; /*Lasha*/
console.log(youngestPerson); /*Lasha*/

// Task 2
const user1 = {
  name: "Misha",
  lastname: "Rekhviashvili",
};
const copyCat = function (user) {
  const newUser = { ...user };
  return newUser;
};
const copiedUser = copyCat(user1);
console.log(copiedUser); /*{name: 'Misha', lastname: 'Rekhviashvili'}*/

// Task 3
while (true) {
  const dice1 = Math.floor(Math.random() * 6 + 1);
  const dice2 = Math.floor(Math.random() * 6 + 1);
  console.log(dice1);
  console.log(dice2);
  if (dice1 === 3 && dice2 === 3) {
    console.log("Draw!");
    break;
  } else if (dice1 === 3) {
    console.log("Player A won the game");
    break;
  } else if (dice2 === 3) {
    console.log("Player B won the game");
    break;
  }
}
