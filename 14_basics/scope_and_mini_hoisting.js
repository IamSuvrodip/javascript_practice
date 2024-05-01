// nested scope

/*function one() {
  const username = "suvrodip";

  function two() {
    const website = "http://www.google.com";
    console.log(username);
  }
  console.log(website);
  two();
}
one();
console.log("\n");*/
// ERROR

/*function one() {
  const username = "suvrodip";

  function two() {
    const website = "http://www.google.com";
    console.log(username);
  }
  //console.log(website);
  two();
}
one();
console.log("\n");*/
// suvrodip

function one() {
  const username = "suvrodip";

  function two() {
    const website = "http://www.google.com";
    console.log(website);
  }
  console.log(username);
  two();
}

one();
console.log("\n");
/*
suvrodip
http://www.google.com
*/

if (true) {
  const username = "Suvrodip";
  if (username === "Suvrodip") {
    const website = "youtube";
    console.log(username + " " + website); //Suvrodip youtube
  }
  // console.log(website); // nor access outside scope
}
// console.log(username); // not access outside scope

//+++++++++++++++ interesting +++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}
// 6

function addone(num) {
  return num + 1;
}
console.log(addone(5));
// 6
