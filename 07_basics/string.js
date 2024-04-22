const name = "Suvrodip";
const repo = 12;
console.log(name + "\n" + repo); // outdated
/*
Suvrodip
12 */

console.log(`Hello my name is ${name} and my repo is ${repo}\n`);
//This is a modern way syntax very effective for the backend
//This is called string interpolation

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

