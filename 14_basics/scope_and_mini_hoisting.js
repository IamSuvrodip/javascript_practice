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
