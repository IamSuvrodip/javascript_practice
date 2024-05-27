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
