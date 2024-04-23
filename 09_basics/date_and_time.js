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
2024-04-23T22:38:10.951Z
Wed Apr 24 2024 04:08:10 GMT+0530 (India Standard Time)
2024-04-23T22:38:10.951Z
24/4/2024, 4:08:10 am


Wed Apr 24 2024
4:08:10 am


2024-04-23T22:38:10.951Z


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
// there all mili second value
/*
Mon Jan 23 2023
23/1/2023, 5:03:45 am


14/1/2024, 12:00:00 am


1713912337356
1705170600000
*/
// now mili second value convert into  second
console.log(Date.now() / 1000);
console.log(Math.floor(Date.now() / 1000));
console.log("\n");

let New_Date = new Date();
console.log(New_Date.getTime());
console.log(New_Date.getFullYear());
console.log(New_Date.getMonth() + 1);
console.log(New_Date.getDate());
console.log(New_Date.getDay());
console.log(New_Date.getHours());
console.log(New_Date.getMinutes());
console.log(New_Date.getSeconds());
console.log(New_Date.getMilliseconds());
console.log("\n");

New_Date.toLocaleString("default", {
  weekday: "long",
});

/*
1713913270463
2024
4
24
3
4
31
10
463
*/
