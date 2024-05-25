let intervalId;
const say_Date = () => {
  console.log("suvrodip", Date.now());
};
document.querySelector("#start").addEventListener("click", () => {
  intervalId = setInterval(say_Date, 1000);
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  console.log("stopped");
});
