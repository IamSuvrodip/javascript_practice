const div = document.createElement("div");
console.log(div);
// <div></div>

div.className = "main";
// div.id = "myid";
div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute("title", "Suvrodip");
div.style.backgroundColor = "green";
div.style.padding = "12px";
div.style.borderRadius = "10px";
//div.innerText = "Suvrodip Chakroborty";
const addtext = document.createTextNode("Suvrodip Chakroborty");
div.appendChild(addtext);

document.body.appendChild(div);
