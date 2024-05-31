const buttons = document.querySelectorAll(".button");
//console.log(buttons);


const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

//events
buttons.forEach((button) => {
  //console.log(button);
  button.addEventListener("click", (event) => {
    //console.log(event);
    //console.log(event.target);
    if (event.target.id === "grey") {
      body.style.backgroundColor = "grey";
    } else if (event.target.id === "green") {
      body.style.backgroundColor = "green";
    } else if (event.target.id === "blue") {
      body.style.backgroundColor = "blue";
    } else if (event.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    } else {
      body.style.backgroundColor = "white";
    }
