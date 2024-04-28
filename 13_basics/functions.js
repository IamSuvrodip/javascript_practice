function myName() {
  console.log("S");
  console.log("U");
  console.log("V");
  console.log("R");
  console.log("O");
  console.log("D");
  console.log("I");
  console.log("P");
}
//reference
myName;
//execute
myName();
/*
S
U
V
R
O
D
I
P
*/

function addTwoNumbers(num1, num2) {
  // Here (Num1, Num2) is parameter
  console.log(num1 + num2);
}

addTwoNumbers(); // NaN
addTwoNumbers(3, 4); // 7    // here 3 and 4 are argument
addTwoNumbers("a", 2); // a2
addTwoNumbers(3, "4"); // 34
addTwoNumbers(3, null); // 3
addTwoNumbers(null, null); // 0
addTwoNumbers(3, undefined); // NaN
console.log("\n");

