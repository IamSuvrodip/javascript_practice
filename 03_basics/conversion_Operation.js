let score = 33;
let num = "33";
let full_name = "Suvrodip";
let combine_number = "WB125";

console.log(typeof score);
console.log(typeof score + "\n");

let value_in_number = Number(full_name);
console.log(typeof value_in_number); // number
console.log(value_in_number + "\n"); // NaN

let value_number = Number(combine_number);
console.log(typeof value_number); // number
console.log(value_number + "\n"); // NAN not a number

let num1 = Number(num);
console.log(typeof num1); // number
console.log(num1 + "\n"); // 33

// "33" => 33
// "WB125" => NAN
// "Suvrodip" => NAN
// true => 1   false => 0
// null => 0
// undefiend => NAN

let isLoggedIn = 1;

let boolean_isLoggedIn = Boolean(isLoggedIn);
console.log(typeof boolean_isLoggedIn); // boolean
console.log(boolean_isLoggedIn + "\n"); // true

// let isLoggedIn = 1; ------> true
// let isLoggedIn = 0; ------> false
// let isLoggedIn = ""; ------> false
// let isLoggedIn = "suvrodip"; ------> true
// let isLoggedIn = 1; ------> true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string
console.log(stringNumber + "\n"); // 33
