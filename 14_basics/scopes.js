// global and local scope

let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);
console.log("\n");
/*
10
20
30
*/

{
  // this is scope
}

if (true) {
  let d = 10;
  const e = 20;
  var f = 30;
}

// console.log(d); // d is not defined
// console.log(e); // e is not defined
console.log(f); // 30
console.log("\n");
// thats why we don't use var type variable

var g = 300;
if (true) {
  var g = 30;
}
console.log(g); // 30
// var nor print global variable thats why we dont use it
console.log("\n");

var h = 300;
if (true) {
  h = 30;
}
console.log(h); // 30
console.log("\n");

let i = 300;
if (true) {
  let i = 30;
}
console.log(i); // 300
console.log("\n");
