// Dates

let mydate = new Date();

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log("\n");

console.log(mydate.toDateString());
console.log(mydate.toLocaleTimeString());
console.log("\n");

console.log(mydate.toJSON());
console.log("\n");

console.log(typeof mydate);
console.log("\n");
/*
2024-04-23T22:35:24.183Z
Wed Apr 24 2024 04:05:24 GMT+0530 (India Standard Time)
2024-04-23T22:35:24.183Z
24/4/2024, 4:05:24 am


Wed Apr 24 2024
4:05:24 am


2024-04-23T22:35:24.183Z


object
*/

let myCreateDate = new Date(2023, 0, 23, 5, 3, 45);
console.log(myCreateDate.toDateString());
//Mon Jan 23 2023
console.log(myCreateDate.toLocaleString());
//23/1/2023, 5:03:45 am
console.log("\n");

let new_myCreateDate = new Date("01-14-2024");
console.log(new_myCreateDate.toLocaleString());
console.log("\n");

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(new_myCreateDate.getTime());
console.log("\n");


/*
Mon Jan 23 2023
23/1/2023, 5:03:45 am


14/1/2024, 12:00:00 am


1713912337356
1705170600000
*/


