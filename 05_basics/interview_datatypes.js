// primitive
// 7 types of primitive datatypes
// primitive datatype is call by value
/*
String
Number
Boolean
null
undefined
Symbol
BigInt
*/

const score = 100;
const scoreValue = 100.35;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol("12345");
const anotherid = Symbol("12345");
console.log(id === anotherid);

const bigNumber = 54656846849999999999999n;
console.log(typeof bigNumber);
const bigNumber1 = 54656846849999999999999;
console.log(typeof bigNumber1);

// Non primitive
/* 
Array
***Objects***
Functions
*/

// arrays
const heros = ["Ironman", "Hulk", "Thor"];

// objects
// in second braket all value is object
{
  name1: "Suvrodip";
  age1: 22;
}

let myObj = {
  name2: "Dip",
  age2: 22,
};

const myFunction = function () {
  console.log("Suvrodip");
};
