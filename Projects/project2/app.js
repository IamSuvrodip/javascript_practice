const form = document.querySelector("form");
//console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || weight < 0 || isNaN(height)) {
    results.innerHTML = "Not a valid height";
  }
  //
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Not a valid weight";
  }
  //
  else {
    const height_meter = height * 0.01;
    const bmi = (weight / (height_meter * height_meter)).toFixed(2);
    // show the results
    results.innerHTML = `<span>${bmi}</span>`;
    //console.log(results.innerText);
  }
  const Underweight = document.querySelector(".Underweight");
  const Normal = document.querySelector(".Normal");
  const Overweight = document.querySelector(".Overweight");
  const imageElement = document.getElementById("myImage");

  if (results.innerText < 18.6) {
    Underweight.style.color = "#910b04";
    results.style.color = "#910b04";
    Normal.style.color = "black";
    Overweight.style.color = "black";
    imageElement.src = "under.svg";
  }
 else if (results.innerText <= 24.9) {
    imageElement.src = "normal.svg";
    results.style.color = "#026115";
    Underweight.style.color = "black";
    Normal.style.color = "#026115";
    Overweight.style.color = "black";
  }
 else {
    Underweight.style.color = "black";
    Normal.style.color = "black";
    results.style.color = "#910b04";
    Overweight.style.color = "#910b04";
    imageElement.src = "over.svg";
  }
});
