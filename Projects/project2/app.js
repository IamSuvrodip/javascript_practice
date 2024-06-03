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
