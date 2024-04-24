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

