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

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],        
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter] 
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter] 
  },
  queueMicrotask: [Function: queueMicrotask],        
  structuredClone: [Function: structuredClone],      
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/
//simple function

// const uname = function () {
//   let username = "suvro";
//   console.log(this.username);
// };
// uname();
// undefined

// arrow function

// const uname = () => {
//   let username = "suvro";
//   console.log(this.username);
// };
// uname();
//undefined

const uname = () => {
  let username = "suvro";
  console.log(this);
};
uname();
//{}
console.log("\n");

// arrow function
// () => {};
// basic arrow function

const addTwo = (number1, number2) => {
  return number1 + number2;
};
console.log(addTwo(3, 5));
console.log("\n"); // 8
