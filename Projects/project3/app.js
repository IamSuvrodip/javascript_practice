const clock = document.getElementById("clock");
//const clock = document.querySelector("#clock");

//bar bar run ho fir setInterval  method use hoga
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerText = date.toLocaleTimeString();
}, 1000);
