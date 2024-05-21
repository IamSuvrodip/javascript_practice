// how to create a new element

const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[0]);

console.log(parent.children[0].innerHTML);
//Monday

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}
/*
Monday
Tuesday
Wednesday
Thursday
*/

parent.children[0].style.color = "orange";
//<div class="day" style="color: orange;">Monday</div>

console.log(parent.firstElementChild);
//<div class="day" style="color: orange;">Monday</div>
console.log(parent.lastElementChild);
//<div class="day">Thursday</div>

const dayOne = document.querySelector(".day");
console.log(dayOne.innerHTML);
console.log(dayOne.parentElement.innerHTML);
/*
 <div class="day" style="color: orange;">Monday</div>
      <div class="day">Tuesday</div>
      <div class="day">Wednesday</div>
      <div class="day">Thursday</div>
    
*/

console.log(dayOne.nextElementSibling.innerHTML);
//Tuesday

console.log("NODES:", parent.childNodes);
