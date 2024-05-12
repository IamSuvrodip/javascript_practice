// while loop

/*
let i = 0;
while (i <= 10) {
  console.log(`value of i is ${i}`);
  i = i++;
}
*/
// Error infinite print (value of i is 0) this line

let j = 0;
while (j <= 10) {
  console.log(`value of j is ${j}`);
  j++;
}
console.log("\n");
/*
value of i is 0
value of i is 1
value of i is 2
value of i is 3
value of i is 4
value of i is 5
value of i is 6
value of i is 7
value of i is 8
value of i is 9
value of i is 10
*/
let i = 0;
while (i <= 10) {
  console.log(`value of i is ${i}`);
  i = i + 1;
}
console.log("\n");
/*
value of i is 0
value of i is 1
value of i is 2
value of i is 3
value of i is 4
value of i is 5
value of i is 6
value of i is 7
value of i is 8
value of i is 9
value of i is 10
*/
let index = 0;
while (index <= 10) {
  console.log(`value of index is ${index}`);
  index = index + 2;
}
console.log("\n");
/*
value of index is 0
value of index is 2
value of index is 4
value of index is 6
value of index is 8
value of index is 10
*/
let myArray = ["flash", "superman", "batman"];

let a = 0;
while (a < myArray.length) {
  console.log(`Value is ${myArray[a]}`);
  a++;
}
console.log("\n");
/*
Value is flash
Value is superman
Value is batman
*/
