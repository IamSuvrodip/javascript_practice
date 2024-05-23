// add element
function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}
addLanguage("JAVA");
addLanguage("CSS");

//add element but it is optimized
function addOptiLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}
addOptiLanguage("SQL");

// EDIT
const secondLang = document.querySelector("li:nth-child(2)");
secondLang.innerHTML = "HTML";
const newli = document.createElement("li");
newli.textContent = "RUBY";
secondLang.replaceWith(newli);
