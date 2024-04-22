const name = "Suvrodip";
const repo = 12;
console.log(name + "\n" + repo); // outdated
/*
Suvrodip
12 */

console.log(`Hello my name is ${name} and my repo is ${repo}\n`);
// this is modern way syntax very efective for backend
// this is called string interpolation

console.log(`Hello my name is ${name.toUpperCase()} and my repo is ${repo}\n`);
/*
Hello my name is Suvrodip and my repo is 12

Hello my name is SUVRODIP and my repo is 12
*/

//another type to declare string variable or any type variable
const gamename = new String("PUBG");
console.log(gamename);
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toLocaleLowerCase());
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("B"));
console.log("\n");
/*
P
{}
4
pubg
PUBG
B
2
*/

console.log(gamename.substring(0, 4));
console.log(gamename.substring(1, 3));
console.log(gamename.slice(-3, 0));
console.log("\n");
/* 
PUBG
UB
*/

//* **** */
const newStringOne = "  Suvro  ";

console.log(newStringOne);
console.log(newStringOne.trim());

/*
  Suvro
Suvro
*/

// convert space into _--->underscore
const url = "https://Suvrodip.com/suvrodip chakroborty";
console.log(url.replace(" ", "_"));
console.log("\n");
//https://Suvrodip.com/suvrodip_chakroborty

console.log(url.includes("suvrodip"));
//true
console.log(url.includes("sumit"));
//false
console.log("\n");

const collage_name = "IIT-Mumbai";
const collage_name1 = "IIT Mumbai";
const collage_name2 = "IIT,Mumbai";
const collage_name3 = "IIT_Mumbai";
const collage_name4 = "IIT.Mumbai";
const collage_name5 = "IIT, Mumbai";

console.log(collage_name.split("-"));
console.log(collage_name.split(" "));
console.log(collage_name.split(","));
console.log(collage_name.split("_"));
console.log(collage_name.split("."));
console.log(collage_name.split(", "));
console.log("\n");

/*
[ 'IIT', 'Mumbai' ]
[ 'IIT-Mumbai' ]
[ 'IIT-Mumbai' ]
[ 'IIT-Mumbai' ]
[ 'IIT-Mumbai' ]
[ 'IIT-Mumbai' ]
*/
