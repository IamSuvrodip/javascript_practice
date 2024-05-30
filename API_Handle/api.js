const requestUrl =
  "https://api.freeapi.app/api/v1/public/randomusers/user/random";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
//console.log("Here");
//console.log(xhr.readyState); //1
xhr.onreadystatechange = function () {
  //ditect
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    const user = document.getElementById("user");
    user.innerText = data.data.name.first;

    const image = document.getElementById("image");
    image.src = data.data.picture.large;
