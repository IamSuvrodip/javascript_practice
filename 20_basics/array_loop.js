// []---------> empty Array
// ["","","",""] ---------> array of strings
// [{},{},{},{},{},{},{}] ---------> array of objects

const myArray = [1, 2, 3, 4, 5, 6, 7];
for (const num of myArray) {
  console.log(num);
}
console.log("\n");
/*
1
2
3
4
5
6
7
*/
const greetings = "Hello";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}
console.log("\n");
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
*/
