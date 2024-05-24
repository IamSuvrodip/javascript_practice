/*
setTimeout(function () {
  console.log("suvrodip");
}, 2000);
*/
const say_Name = function () {
  console.log("suvrodip");
};
const change_Name = function () {
  document.querySelector("h1").innerHTML = "Rudronil";
};
const changeMe = setTimeout(change_Name, 2000);

document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(changeMe);
  console.log("Stopped");
});
