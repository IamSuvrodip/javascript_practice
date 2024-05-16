const myHerros = ["Batman", "Superman", "Flash", "Ironman"];

const values = myHerros.forEach((item) => {
  console.log(item);
});
/*
Batman
Superman
Flash
Ironman
*/
console.log(values); //undefined
console.log("\n");

const myHerros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const value = myHerros1.filter((item) => item > 4);
console.log(value);
console.log("\n");
/*
[ 5, 6, 7, 8, 9 ]
*/
const value2 = myHerros1.filter((item) => {
  item > 4;
});
console.log(value2);
console.log("\n");
// []
const value3 = myHerros1.filter((item) => {
  return item > 6;
});
console.log(value3);
console.log("\n");
/*
[ 7, 8, 9 ]
*/
// foreach
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myNums = [];
newNums.forEach((num) => {
  if (num > 4) {
    myNums.push(num);
  }
});
console.log(myNums);
console.log("\n");
/*
[ 5, 6, 7, 8, 9 ]
*/
