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
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
*/
// map not print duplicate value

// forof loop in map
const map2 = new Map();
map2.set("IN", "India");
map2.set("USA", "United States of America");
map2.set("FR", "France");
map2.set("IN", "India");

for (const key of map2) {
  console.log(key);
}
console.log("\n");
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
*/
const map3 = new Map();
map3.set("IN", "India");
map3.set("USA", "United States of America");
map3.set("FR", "France");
map3.set("IN", "India");

for (const [key] of map3) {
  console.log(key);
}
console.log("\n");
/*
IN
USA
FR
*/

const map4 = new Map();
map4.set("IN", "India");
map4.set("USA", "United States of America");
map4.set("FR", "France");
map4.set("IN", "India");
for (const [key, value] of map4) {
  console.log(` ${key} :-  ${value}`);
}
console.log("\n");
/*
 IN :-  India
 USA :-  United States of America
 FR :-  France
*/
// forof in object

/*
const myObj = {
  game1: "IGI",
  game2: "Spiderman",
  game3: "GTA5",
  game4: "PUBG",
};

for (const [key, value] of myObj) {
  console.log(`${key} :- ${value}`);
}
console.log("\n");
*/
/*
for (const [key, value] of myObj) {
                           ^
*/
//ERROR myObj is not iterable

//there use forin loop not forof loop
const myObj1 = {
  game1: "IGI",
  game2: "Spiderman",
  game3: "GTA5",
  game4: "PUBG",
};
for (const key in myObj1) {
  console.log(key);
}

console.log("\n");
/*
game1
game2
game3
game4
*/
const myObj2 = {
  game1: "IGI",
  game2: "Spiderman",
  game3: "GTA5",
  game4: "PUBG",
};

for (const key in myObj2) {
  console.log(myObj2[key]);
}

console.log("\n");
// only print all values
/*
IGI
Spiderman
GTA5
PUBG
*/
const myObj3 = {
  game1: "IGI",
  game2: "Spiderman",
  game3: "GTA5",
  game4: "PUBG",
};
for (const key in myObj3) {
  console.log(`${key} :- ${myObj3[key]}`);
}

console.log("\n");
/*
game1 :- IGI
game2 :- Spiderman
game3 :- GTA5
game4 :- PUBG
*/
// forin loop in array
const myHerros = ["Batman", "Superman", "Flash", "Ironman"];
for (const key in myHerros) {
  console.log(key);
}
console.log("\n");
// print keys index value
/*
0
1
2
3
*/
const myHerros1 = ["Batman", "Superman", "Flash", "Ironman"];
for (const key in myHerros1) {
  console.log(myHerros1[key]);
}
console.log("\n");
/*
Batman
Superman
Flash
Ironman
*/
const myHerros2 = ["Batman", "Superman", "Flash", "Ironman"];
for (const key in myHerros2) {
  console.log(`${key} :- ${myHerros2[key]}`);
}
console.log("\n");
/*
0 :- Batman
1 :- Superman
2 :- Flash
3 :- Ironman
*/
// forEach function
const language = ["js", "ruby", "java", "python"];

language.forEach(function (value) {
  console.log(value);
});
console.log("\n");
/*
js
ruby
java
python
*/
// arrow function
language.forEach((value1) => {
  console.log(value1);
});
console.log("\n");
/*
js
ruby
java
python
*/
