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
