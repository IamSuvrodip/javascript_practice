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
