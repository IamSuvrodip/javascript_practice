const requestUrl =
  "https://api.freeapi.app/api/v1/public/randomusers/user/random";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
//console.log("Here");
//console.log(xhr.readyState); //1
xhr.onreadystatechange = function () {
  //ditect
