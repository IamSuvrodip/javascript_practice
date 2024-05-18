// map function
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = myNumbers.map((num) => {
  return num + 10;
});
console.log(newNumber);
console.log("\n");
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

/************************ chaining ************************/

const newNumber1 = myNumbers
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 1;
  })
  .filter((num) => num >= 40);
console.log(newNumber1);
console.log("\n");
