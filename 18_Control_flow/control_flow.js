// if

if (false) {
  // code not execute because if is false
}
if (true) {
  // code is execute because if is true
}
if (2 == 2) {
}

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("User logged in");
}
console.log("\n");

if (2 == 2) {
  console.log("1.Executed");
}
if ("2" == 2) {
  console.log("2.Executed");
}
console.log("\n");
if (2 === 2) {
  console.log("3.Executed");
}
if ("2" === 2) {
  console.log("4.Executed");
}
if ("2" !== 2) {
  console.log("5.Executed");
}
console.log("\n");
const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`user power: ${power}`);
}
console.log("\n");

const UserLoggedIn = true;
const debitCard = true;
if (UserLoggedIn && debitCard) {
  // && and sign
  console.log("Allow to buy course");
}
