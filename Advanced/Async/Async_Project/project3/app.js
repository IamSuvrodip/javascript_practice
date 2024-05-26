const random_color = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(ChangeBgColor, 1000);
  }

  function ChangeBgColor() {
    document.body.style.backgroundColor = random_color();
  }
};
const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
