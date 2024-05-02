// this key word
// object
// here this keyword makes the current context
const user = {
  username: "Suvrodip",
  age: 22,

  welcome: function () {
    console.log(`${this.username},  welcome to website`);
  },
};
user.welcome(); // Suvrodip,  welcome to website
user.username = "Rudronil";
user.welcome(); // Rudronil,  welcome to website
console.log("\n");
const user1 = {
  name: "Ram",
  age: 12,

  welcome: function () {
    console.log(`${this.name},  welcome to website`);
    console.log(this);
  },
};
user1.welcome();
/*
Ram,  welcome to website
{ name: 'Ram', age: 12, welcome: [Function: welcome] }
*/
user1.name = "Sam";
user1.welcome();
/*
Sam,  welcome to website
{ name: 'Sam', age: 12, welcome: [Function: welcome] }
*/
console.log("\n");

const user2 = {
  user_name: "Ram",
  age: 12,

  welcome: function () {
    console.log(`${this.user_name},  welcome to website`);
  },
};

console.log(this);
// {}  // run in browser console
console.log("\n");

// function
function funcname() {
  // let username = "suvro"; // undefined
  console.log(this.username);
}
funcname();
console.log("\n");
