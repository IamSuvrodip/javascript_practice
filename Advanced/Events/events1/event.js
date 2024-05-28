/*
document.getElementById("india").onclick = () => {
  alert("India Clicked");
};
*/
// it is provide less features
/*
document.getElementById("india").addEventListener(
  "click",
  (event) => {
    console.log(event);
  },
  false
);*/
//type, timestamp, defaultPrevented
//target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// event propagation
// event propagation two type:-    1.event bubbling (false)   2.event capturing(true)
//event bubbling
/*document.getElementById("images").addEventListener(
  "click",
  (event) => {
    console.log("clicked inside the ul");
  },
  false
);
document.getElementById("japan").addEventListener(
  "click",
  (event) => {
    console.log("Japan Clicked");
  },
  false
);
// when clicked japan image (Japan Clicked \n clicked inside the ul)

document.getElementById("images").addEventListener("click", (event) => {
  console.log("clicked inside the ul");
});
document.getElementById("usa").addEventListener("click", (event) => {
  console.log("USA Clicked");
});
// same
// when clicked usa image (usa Clicked \n clicked inside the ul)

// event capturing
document.getElementById("images").addEventListener(
  "click",
  (event) => {
    //console.log("clicked inside the ul");
  },
  true
);
document.getElementById("germany").addEventListener(
  "click",
  (event) => {
    console.log("germany Clicked");
  },
  true
);
// when clicked germany image (clicked inside the ul \n germany Clicked)

document.getElementById("images").addEventListener(
  "click",
  (event) => {
    console.log("clicked inside the ul");
  },
  false
);
document.getElementById("brazil").addEventListener(
  "click",
  (event) => {
    console.log("brazil Clicked");
    event.stopPropagation();
  },
  false
);
// brazil Clicked

document.getElementById("google").addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("google Clicked");
  },
  false
);
*/

// click on image and image is delete or not shown in browser

/*.
document.querySelector("#images").addEventListener("click", (event) => {
  // console.log(event);
  // console.log(event.target);
  console.log(event.target.parentNode);
  let removeIt = event.target.parentNode;
  removeIt.remove();
  //removeIt.parentNode.removeChild(removeIt);
});
*/
document.querySelector("#images").addEventListener("click", (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === "IMG") {
    console.log(event.target.id);
    let removeIt = event.target.parentNode;
    removeIt.remove();
  }
});
