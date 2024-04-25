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


console.log(jsuser1.mySym); // mykey-3544
console.log(typeof jsuser1.mySym); // string
console.log(typeof mySym === "symbol");

console.log(jsuser1[mySym1]); // mykey-4826
console.log(mySym1.description); // key-16789
console.log(typeof mySym1 === "symbol");
console.log("\n");

console.log(jsuser1);

jsuser.section = "A";
console.log(jsuser.section);
console.log("\n");

Object.freeze(jsuser);
jsuser.section = "B";
jsuser.isLoggedIn = true;
console.log(jsuser);
console.log("\n");

/*
mykey-3544
string
true
mykey-4826
key-16789
true


{ mySym: 'mykey-3544', [Symbol(key-16789)]: 'mykey-4826' } 
A


{
  name: 'Suvrodip',
  roll: 22,
  section: 'A',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ]
}
*/
