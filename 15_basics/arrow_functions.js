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
