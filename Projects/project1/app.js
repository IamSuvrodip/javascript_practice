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
