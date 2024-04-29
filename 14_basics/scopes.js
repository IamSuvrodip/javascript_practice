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
