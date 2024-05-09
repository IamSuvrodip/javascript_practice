const userEmail = "Suvro@gmail.com";

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("No user email");
}
// Got user Email
const userEmail1 = "";

if (userEmail1) {
  console.log("Got user Email");
} else {
  console.log("No user email");
}
//No user email
const userEmail2 = [];

if (userEmail2) {
  console.log("Got user Email");
} else {
  console.log("No user email");
}
//Got user Email

// falsy values
/*
false
0
-0
BigInt 0n
""
null
undefined
NaN
*/
// Truthy values
/*
"0"
'false'
" "
[]
{}
function(){}

*/
// empty array is a truthy value how to convert into falsy value
const userEmail3 = [];

if (userEmail3.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
