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
// MAP
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
console.log(map);
console.log("\n");

/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
*/
const map1 = new Map();
map1.set("IN", "India");
map1.set("USA", "United States of America");
map1.set("FR", "France");
map1.set("IN", "India");

console.log(map1);
console.log("\n");
