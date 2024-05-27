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
