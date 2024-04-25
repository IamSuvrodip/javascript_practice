// singleton
// Object.create

// object literals
const jsuser = {
  name: "Suvrodip",
  //"name": "suvrodip",
  roll: 22,
  section: "B",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// access object
console.log(jsuser.name);

console.log(jsuser["roll"]);
console.log("\n");


// *******SYMBOL*******
// create a symbol and add in object
const mySym = Symbol("key1");
const mySym1 = Symbol("key-16789");
const jsuser1 = {
  mySym: "mykey-3544",
  [mySym1]: "mykey-4826",
};
