const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArray[0]);
console.log(myArray[5]);
console.log("\n");

const myHeros = ["Ironman", "Hulk", "Thor"];
console.log(myHeros[1]);
// another way
const myArray2 = new Array(9, 8, 7);
console.log(myArray2[0]);
/*
1
6


Hulk
9
*/

// Array method
const myArray3 = [1, 2, 3, 4];
myArray3.push(10);
myArray3.push(40);
console.log(myArray3); //   [ 1, 2, 3, 4, 10, 40 ]
console.log(myArray3); // [ 1, 2, 3, 4, 10, 40 ]
myArray3.pop();
console.log(myArray3); // [ 1, 2, 3, 4, 10 ]
console.log("\n");

myArray3.unshift(5);
console.log(myArray3); // [ 5, 1, 2, 3, 4, 10 ]
myArray3.shift();
console.log(myArray3); // [ 1, 2, 3, 4, 10 ]
console.log("\n");

console.log(myArray3.includes(9)); // false
console.log(myArray3.includes(10)); // true
console.log(myArray3.indexOf(9)); // -1
console.log(myArray3.indexOf(10)); // 4
console.log("\n");


const myArray4 = myArray3.join();
console.log(myArray3);
console.log(typeof myArray3);
console.log(myArray4);
console.log(typeof myArray4);
console.log("\n");
/*
[ 1, 2, 3, 4, 10 ]
object
1,2,3,4,10
string
*/

// slice, splice

console.log("A", myArray3);

const myArray5 = myArray3.slice(1, 3);
console.log(myArray5);
console.log("B", myArray3);

console.log("\n");

const myArray6 = myArray3.splice(1, 3);
console.log("C", myArray3);
console.log(myArray6);
/*
A [ 1, 2, 3, 4, 10 ]
[ 2, 3 ]
B [ 1, 2, 3, 4, 10 ]


C [ 1, 10 ]
[ 2, 3, 4 ]
*/

