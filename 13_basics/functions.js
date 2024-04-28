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
const result = addTwoNumbers(5, 6);
console.log(result);
console.log("\n");
/*
11
undefined
*/

function subTwoNumbers(num1, num2) {
  const res = num1 - num2;
  return res;
  //console.log("suvro"); // Unreachable code detected
}
console.log(subTwoNumbers(10, 3)); // 7
console.log("\n");

function mulTwoNumbers(num1, num2) {
  return num1 * num2;
}
const res = mulTwoNumbers(11, 20);
console.log(res); // 220
console.log("\n");

function registerUserMessage(username) {
  return `${username} Just registerd in..`;
}

console.log(loginUserMessage("Suvrodip")); // Suvrodip Just logged in..
console.log(loginUserMessage("")); // Just logged in..
console.log(loginUserMessage()); // undefined Just logged in..
console.log("\n");
